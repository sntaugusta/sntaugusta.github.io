import { IconUpload } from '@/components/icons';
import { IInput } from '@/types/components/input';
import { ChangeEvent, FC, useState } from 'react';
import * as S from './file.style';

export const FileInput: FC<IInput> = (props) => {
  const {
    id,
    label,
    multiple,
    onChange,
    onUpload,
    accept = 'image/jpeg, image/png',
    height,
    width,
    shape = 'square',
  } = props;
  const [stateBlob, setStateBlob] = useState('');
  const [stateFilename, setStateFilename] = useState('');

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    if (currentTarget && currentTarget.files) {
      const [file] = currentTarget.files;
      if (file) {
        const blob = URL.createObjectURL(file);
        new Promise((resolve) => {
          const img = new Image();
          img.addEventListener('load', () => {
            // Use naturalWidth to get the underlying image file dimensions
            if (onChange) {
              onChange(e);
            }
            if (onUpload) {
              onUpload({
                url: blob,
                height: img.height,
                width: img.width,
                x: img.width / 3,
                y: img.height / 3,
                zoom: 1,
              });
            }
            resolve(null);
          });
          img.src = blob;
        });
        setStateFilename(file.name);
        setStateBlob(blob);

        setTimeout(() => {
          e.target.value = '';
        }, 1000);
      }
    }
  };

  return multiple ? (
    <input type="file" id={id} />
  ) : (
    <S.File
      htmlFor={id}
      title={stateFilename}
      hasImage={stateBlob.length > 1}
      shape={shape}
      style={{
        height: height ? height : 'auto',
        width: width ? width : 'auto',
        borderRadius: shape === 'circle' ? '50%' : '12px',
      }}
    >
      <IconUpload />
      <S.Filename>{label}</S.Filename>
      <input type="file" id={id} accept={accept} onChange={handleChangeFile} />
      <S.FilePreview
        style={{ backgroundImage: `url(${stateBlob})`, borderRadius: shape === 'circle' ? '50%' : '12px' }}
      />
    </S.File>
  );
};
