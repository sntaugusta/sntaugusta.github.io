import { Aside } from '@/components/aside';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useSplitScreenContext } from '@/components/screen-slice/partials/screen-slice.context';
import { IInput, IInputChanged } from '@/types/components/input';
import { ScreenSliceInit, ScreenSliceKeys } from '@/types/components/screen-slice';
import { FC, InputEvent, useState } from 'react';

export const KidsAside: FC<{ onChanged: IInput['onChanged'] }> = ({ onChanged }) => {
  const {
    get: { stateScreens },
    set: { setStateScreens },
  } = useSplitScreenContext();
  const [stateInformation, setStateInformation] = useState({
    thumb: '',
    name: '',
    date: '',
    team: '',
    mother: '',
    father: '',
  });

  const backgroundCenter = new Image();
  const backgroundLeft = new Image();
  const backgroundRight = new Image();
  backgroundCenter.src = '/kids-frame.png';
  backgroundLeft.src = '/kids-frame-left.png';
  backgroundRight.src = '/kids-frame-right.png';

  const handleChangedImage = (e: IInputChanged) => {
    if (onChanged) {
      if (e.url) {
        setStateInformation((prev) => ({ ...prev, thumb: e.url }));
      }
    }
  };

  const handleInputInformation = (e: InputEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setStateInformation((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickGenerate = () => {
    const uploadImage = new Image();
    uploadImage.addEventListener('load', () => {
      const screensList = Object.entries(stateScreens) as [ScreenSliceKeys, ScreenSliceInit[ScreenSliceKeys]][];
      const { center, aside } = stateScreens;
      screensList.forEach(([key]) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
        if (key === 'center') {
          const { width, height } = center;
          const { width: asideWidth } = aside;
          canvas.width = width - 2;
          canvas.height = height;
          ctx.drawImage(backgroundCenter, asideWidth / 2, 0, width, height, 0, 0, width, height);
        }
        if (key === 'aside') {
          const { width, height } = aside;
          canvas.width = width;
          canvas.height = height;
          const widthThumb = 465;
          const marginTop = 150;
          const halfWidth = width / 2;
          const marginAside = (halfWidth - widthThumb) / 2;
          const marginAsideRight = marginAside + halfWidth;

          ctx.drawImage(
            uploadImage,
            0,
            0,
            uploadImage.width,
            uploadImage.height,
            marginAside,
            marginTop,
            widthThumb,
            widthThumb
          );
          ctx.drawImage(
            uploadImage,
            0,
            0,
            uploadImage.width,
            uploadImage.height,
            marginAsideRight,
            marginTop,
            widthThumb,
            widthThumb
          );

          ctx.drawImage(backgroundLeft, 0, 0, backgroundLeft.width, backgroundLeft.height);
          ctx.drawImage(
            backgroundRight,
            0,
            0,
            backgroundRight.width,
            backgroundRight.height,
            halfWidth,
            0,
            backgroundRight.width,
            backgroundRight.height
          );
        }
        const src = canvas.toDataURL('image/png');
        setStateScreens((prevState) => {
          return {
            ...prevState,
            [key]: { ...prevState[key], url: src },
          };
        });
      });
    });
    uploadImage.src = stateInformation.thumb;
  };

  return (
    <Aside>
      <Input label="Foto" type="crop" onChanged={handleChangedImage} />
      <Input
        label="Nome completo da criança"
        name="name"
        value={stateInformation.name}
        onInput={handleInputInformation}
      />
      <Input label="Data de nascimento" name="date" value={stateInformation.date} onInput={handleInputInformation} />
      <Input label="Equipe" name="team" value={stateInformation.team} onInput={handleInputInformation} />
      <Input
        label="Nome completo da mãe"
        name="mother"
        value={stateInformation.mother}
        onInput={handleInputInformation}
      />
      <Input
        label="Nome completo do pai"
        name="father"
        value={stateInformation.father}
        onInput={handleInputInformation}
      />
      <Button onClick={handleClickGenerate}>Gerar arte</Button>
    </Aside>
  );
};
