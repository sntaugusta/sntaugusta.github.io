import { Aside } from '@/components/aside';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { useSplitScreenContext } from '@/components/screen-slice/partials/screen-slice.context';
import { IInput, IInputChanged } from '@/types/components/input';
import { ScreenSliceInit, ScreenSliceKeys } from '@/types/components/screen-slice';
import { maskfy } from 'maskfy';
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
  backgroundCenter.src = '/img/kids-frame.png';
  backgroundLeft.src = '/img/kids-frame-left-long.png';
  backgroundRight.src = '/img/kids-frame-right-long.png';

  const handleChangedImage = (e: IInputChanged) => {
    if (onChanged) {
      if (e.url) {
        setStateInformation((prev) => ({ ...prev, thumb: e.url }));
      }
      onChanged(e);
    }
  };

  const handleInputInformation = (e: InputEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    if (name === 'date') {
      const valueMask = maskfy(value, { mask: '99/99/9999' });
      return setStateInformation((prev) => ({ ...prev, [name]: valueMask }));
    }
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
          const maxWidth = width - width / 10;
          canvas.width = width - 2;
          canvas.height = height;
          ctx.drawImage(backgroundCenter, asideWidth / 2, 0, width, height, 0, 0, width, height);

          const wrapText = (text: string, y: number, lineHeight = 76) => {
            const words = text.split(' ');
            let line = '';
            const x = width / 2;

            for (let n = 0; n < words.length; n++) {
              const testLine = line + words[n] + ' ';
              const metrics = ctx.measureText(testLine);
              const testWidth = metrics.width;

              if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
              } else {
                line = testLine;
              }
            }
            ctx.fillText(line, x, y);
            return y + lineHeight;
          };

          ctx.font = '148px Miss Smarty Pants';
          ctx.fillStyle = '#446977';
          ctx.textBaseline = 'top';
          ctx.textAlign = 'center';
          ctx.letterSpacing = '2px';
          let yInformation = 0;
          const textWelcome = 'acaba de chegar à família Sara Nossa Terra';
          yInformation = wrapText(stateInformation.name, 120);
          ctx.font = '90px Amatic SC';
          ctx.letterSpacing = '0px';
          yInformation = wrapText(textWelcome, yInformation * 1.4);
          ctx.font = `76px Amatic SC`;
          if (!stateInformation.team) {
            yInformation = yInformation + 46;
          }
          if (!stateInformation.father) {
            yInformation = yInformation + 46;
          }
          yInformation = wrapText(`Data: ${stateInformation.date}`, yInformation * 1.8);
          if (stateInformation.team) {
            yInformation = wrapText(`Equipe: ${stateInformation.team}`, yInformation);
          }
          yInformation = wrapText(`Mãe: ${stateInformation.mother}`, yInformation);
          if (stateInformation.father) {
            wrapText(`Pai: ${stateInformation.father}`, yInformation);
          }
        }
        if (key === 'aside') {
          const { width, height } = aside;
          canvas.width = width;
          canvas.height = height;
          const widthThumb = 465;
          // const marginTop = 150;
          const marginTop = 230;
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
            widthThumb - 170
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
            widthThumb - 170
          );

          // ctx.drawImage(backgroundLeft, 0, 0, backgroundLeft.width, backgroundLeft.height);
          ctx.drawImage(
            backgroundLeft,
            0,
            0,
            backgroundLeft.width,
            backgroundLeft.height,
            0,
            0,
            backgroundLeft.width,
            height
          );
          // ctx.drawImage(
          //   backgroundRight,
          //   0,
          //   0,
          //   backgroundRight.width,
          //   backgroundRight.height,
          //   halfWidth,
          //   0,
          //   backgroundRight.width,
          //   backgroundRight.height
          // );
          ctx.drawImage(
            backgroundRight,
            0,
            0,
            backgroundRight.width,
            backgroundRight.height,
            halfWidth,
            0,
            backgroundRight.width,
            height
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
      <Input
        label="Data de nascimento"
        name="date"
        placeholder={`Ex.: ${new Date(Date.now() - 1e10).toLocaleDateString('pt-br')}`}
        value={stateInformation.date}
        onInput={handleInputInformation}
      />
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
      <Button
        onClick={handleClickGenerate}
        disabled={!stateInformation.name || !stateInformation.date || !stateInformation.mother}
      >
        Gerar arte
      </Button>
    </Aside>
  );
};
