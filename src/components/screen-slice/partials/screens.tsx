import { ScreenSliceInit, ScreenSliceKeys, ScreenSliceProps } from '@/types/components/screen-slice';
import { FC, useEffect } from 'react';
import { useSplitScreenContext } from './screen-slice.context';
import * as S from './screens.style';

export const SplitScreenScreens: FC<ScreenSliceProps> = (props) => {
  const { url } = props;
  const {
    get: { stateScreens },
    set: { setStateScreens },
  } = useSplitScreenContext();

  useEffect(() => {
    const img = new Image();
    img.addEventListener('load', () => {
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
          const sx = asideWidth / 2; // X do Canva
          const sy = 0; // Y do Canva
          const sw = width; // Largura do canva
          const sh = height; // Largura do canva
          const dx = 0;
          const dy = 0;
          const dw = width;
          const dh = height;
          ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
        }
        if (key === 'aside') {
          const { width, height } = aside;
          const { height: centerHeight, width: centerWidth } = center;
          canvas.width = width;
          canvas.height = height;
          const sx1 = 0; // X do Canva
          const sy1 = 0; // Y do Canva
          const sw1 = width / 2; // Largura do canva
          const sh1 = centerHeight; // Largura do canva
          const dx1 = 0;
          const dy1 = 0;
          const dw1 = width / 2;
          const dh1 = height;
          ctx.drawImage(img, sx1, sy1, sw1, sh1, dx1, dy1, dw1, dh1);
          const sx2 = width / 2 + centerWidth; // X do Canva
          const sy2 = 0; // Y do Canva
          const sw2 = width / 2; // Largura do canva
          const sh2 = centerHeight; // Largura do canva
          const dx2 = width / 2;
          const dy2 = 0;
          const dw2 = width / 2;
          const dh2 = height;
          ctx.drawImage(img, sx2, sy2, sw2, sh2, dx2, dy2, dw2, dh2);
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
    if (url) {
      img.src = url;
    }
  }, [url]);

  return (
    <S.Screens>
      <S.ScreensContent
        style={{
          backgroundImage: `url(${stateScreens.aside.url})`,
          backgroundPositionX: '0%',
          backgroundSize: '200% 100%',
          aspectRatio: 8 / 9,
          width: '25%',
        }}
      >
        <S.ScreenTitle>{stateScreens.aside.label} (Esquerda)</S.ScreenTitle>
        <S.ScreenSize>
          {stateScreens.aside.width / 2} x {stateScreens.aside.height}
        </S.ScreenSize>
      </S.ScreensContent>
      <S.ScreensContent
        style={{
          backgroundImage: `url(${stateScreens.center.url})`,
          backgroundPositionX: '0%',
          aspectRatio: 16 / 9,
          width: '50%',
        }}
      >
        <S.ScreenTitle>{stateScreens.center.label}</S.ScreenTitle>
        <S.ScreenSize>
          {stateScreens.center.width} x {stateScreens.center.height}
        </S.ScreenSize>
      </S.ScreensContent>
      <S.ScreensContent
        style={{
          backgroundImage: `url(${stateScreens.aside.url})`,
          backgroundPositionX: '100%',
          backgroundSize: '200% 100%',
          aspectRatio: 8 / 9,
          width: '25%',
        }}
      >
        <S.ScreenTitle>{stateScreens.aside.label} (Direita)</S.ScreenTitle>
        <S.ScreenSize>
          {stateScreens.aside.width / 2} x {stateScreens.aside.height}
        </S.ScreenSize>
      </S.ScreensContent>
    </S.Screens>
  );
};
