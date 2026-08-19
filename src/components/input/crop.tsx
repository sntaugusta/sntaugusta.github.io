import { Button } from '@/components/button';
import { IInput, IInputChanged } from '@/types/components/input';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import Cropper, { Area, Point } from 'react-easy-crop';
import * as S from './crop.style';
import { FileInput } from './file';
import { RangeInput } from './range';

export const CropInput: FC<IInput> = (props) => {
  const { onChanged } = props;
  const [stateImage, setStateImage] = useState<IInputChanged>({
    url: '',
    zoom: 1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    name: '',
  });
  const previewRef = useRef<HTMLDivElement>(null);
  const [stateCroppedAreaPixels, setStateCroppedAreaPixels] = useState<Area>();
  const [statePreviewURL, setStatePreviewURL] = useState('');

  const handleUploadInput = (config: IInputChanged) => {
    setStateImage(config);
  };

  const handleChangeZoom = (e: ChangeEvent<HTMLInputElement>) => {
    setStateImage((prev) => ({ ...prev, zoom: e.target.valueAsNumber }));
  };

  const handleCropChange = (location: Point) => {
    setStateImage((prev) => ({ ...prev, x: location.x, y: location.y }));
  };

  const handleCropComplete = (_: Area, croppedAreaPixels: Area) => {
    setStateCroppedAreaPixels(croppedAreaPixels);
  };

  const createImage = async (url: string) => {
    return new Promise<HTMLImageElement>((resolve) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.src = url;
    });
  };

  const getCroppedImg = async (imageSrc: string, pixelCrop: Area) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return null;
    }

    canvas.width = image.width;
    canvas.height = image.height;
    ctx.translate(image.width / 2, canvas.height / 2);
    ctx.translate(-image.width / 2, -image.height / 2);
    ctx.drawImage(image, 0, 0);

    const croppedCanvas = document.createElement('canvas');
    const croppedCtx = croppedCanvas.getContext('2d');

    if (!croppedCtx) {
      return null;
    }

    croppedCanvas.width = pixelCrop.width;
    croppedCanvas.height = pixelCrop.height;

    croppedCtx.drawImage(
      canvas,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    return new Promise<IInputChanged>((resolve) => {
      croppedCanvas.toBlob((file) => {
        resolve({
          url: file ? URL.createObjectURL(file) : imageSrc,
          width: croppedCanvas.width,
          height: croppedCanvas.height,
          x: 0,
          y: 0,
          zoom: 1,
          name: stateImage.name,
        });
      }, 'image/jpeg');
    });
  };

  const handleClickSave = async () => {
    if (stateCroppedAreaPixels && onChanged) {
      const propsCrop = await getCroppedImg(stateImage.url, stateCroppedAreaPixels);
      if (propsCrop) {
        onChanged(propsCrop);
        setStatePreviewURL(propsCrop.url);
        setStateImage({ url: '', width: 0, height: 0, x: 0, y: 0, zoom: 1, name: '' });
      }
    }
  };

  useEffect(() => {
    const { current } = previewRef;
    if (current) {
      const aside = current.closest('aside')?.parentNode as HTMLElement;
      aside.style.zIndex = '2';
      return () => aside.removeAttribute('style');
    }
  }, []);

  return (
    <S.WrapperCrop>
      <S.ItemPreviewWrapper ref={previewRef}>
        <S.PreviewTitleCrop>Upload</S.PreviewTitleCrop>
        {stateImage.url ? (
          <S.PreviewCrop>
            <Cropper
              style={{
                containerStyle: {
                  backgroundColor: '#000',
                  position: 'relative',
                  width: '280px',
                  height: '280px',
                },
              }}
              image={stateImage.url}
              crop={{ x: stateImage.x, y: stateImage.y }}
              zoom={stateImage.zoom}
              aspect={1}
              onCropChange={handleCropChange}
              onCropComplete={handleCropComplete}
            />
            <S.ToolsCrop>
              <RangeInput label="Zoom" value={stateImage.zoom} min={1} max={5} step="0.2" onChange={handleChangeZoom} />
              <Button onClick={handleClickSave}>Salvar</Button>
            </S.ToolsCrop>
          </S.PreviewCrop>
        ) : null}
        <S.ItemPreviewContent>
          <FileInput {...props} width="100%" onUpload={handleUploadInput} />
          <S.ItemPreviewThumb>
            {statePreviewURL ? <img src={statePreviewURL} width="160px" height="160px" /> : null}
          </S.ItemPreviewThumb>
        </S.ItemPreviewContent>
      </S.ItemPreviewWrapper>
    </S.WrapperCrop>
  );
};
