'use client';

import { Aside } from '@/components/aside';
import { IconLock, IconLockOpenRight } from '@/components/icons';
import { Input } from '@/components/input';
import { useSplitContext } from '@/context/pages/content';
import { IHandleChangeSize } from '@/types/components/aside';
import { ScreensKeys, ScreensProps } from '@/types/context/split';
import { ChangeEvent } from 'react';
import * as S from './split-aside.style';

export const SplitAside = () => {
  const {
    get: { stateScreens },
    set: { setStateScreens, setStateImages },
  } = useSplitContext();

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    if (currentTarget && currentTarget.files) {
      const [file] = currentTarget.files;
      const img = new Image();
      img.addEventListener('load', () => {
        const screensList = Object.entries(stateScreens) as [ScreensKeys, ScreensProps[ScreensKeys]][];
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
          setStateImages((prevState) => ({ ...prevState, [key as ScreensKeys]: src }));
        });
      });
      const blob = URL.createObjectURL(file);
      img.src = blob;
    }
  };

  const handleChangeSize = ({ event, attr, key }: IHandleChangeSize) => {
    const {
      currentTarget: { value },
    } = event;
    setStateScreens((prevState) => {
      const content = prevState[key as ScreensKeys];
      const settings = { width: content.width, height: content.height };
      if (content.lock) {
        settings.width = attr === 'width' ? Number(value) : Math.floor(Number(value) * (16 / 9));
        settings.height = attr === 'width' ? Math.floor(Number(value) * (9 / 16)) : Number(value);
      } else {
        settings[attr as keyof typeof settings] = Number(value);
      }
      return {
        ...prevState,
        [key]: { ...content, width: settings.width, height: settings.height },
      };
    });
  };

  const handleClickLock = (key: ScreensKeys) => {
    setStateScreens((prevState) => {
      const content = prevState[key as ScreensKeys];
      return {
        ...prevState,
        [key]: { ...content, lock: !content.lock },
      };
    });
  };

  return (
    <Aside>
      <S.Tools>
        <S.ToolsIcon href="./sample-psd.psd">PSD de Exemplo</S.ToolsIcon>
      </S.Tools>
      <Input label="Upload de imagem" type="file" onChange={handleChangeFile} />
      {Object.entries(stateScreens).map(([key, value]) => (
        <S.Category key={key}>
          <S.CategoryName>{value.label}</S.CategoryName>
          <table cellPadding={0} cellSpacing={4}>
            <tbody>
              <tr>
                <th>
                  <S.CategoryLabel htmlFor={`${key}-width`}>Largura</S.CategoryLabel>
                </th>
                <td width="100%">
                  <S.CategoryInputWrapper>
                    <S.CategoryInput
                      type="number"
                      value={value.width}
                      id={`${key}-width`}
                      onChange={(e) => handleChangeSize({ event: e, attr: 'width', key: key as ScreensKeys })}
                    />
                    <span>px</span>
                  </S.CategoryInputWrapper>
                </td>
                <td>
                  <S.CategoryLockWrapper>
                    <S.CategoryLockContent onClick={() => handleClickLock(key as ScreensKeys)}>
                      {value.lock ? <IconLock /> : <IconLockOpenRight />}
                    </S.CategoryLockContent>
                  </S.CategoryLockWrapper>
                </td>
              </tr>
              <tr>
                <th>
                  <S.CategoryLabel htmlFor={`${key}-height`}>Altura</S.CategoryLabel>
                </th>
                <td>
                  <S.CategoryInputWrapper>
                    <S.CategoryInput
                      type="number"
                      value={value.height}
                      id={`${key}-height`}
                      onChange={(e) => handleChangeSize({ event: e, attr: 'height', key: key as ScreensKeys })}
                    />
                    <span>px</span>
                  </S.CategoryInputWrapper>
                </td>
              </tr>
            </tbody>
          </table>
        </S.Category>
      ))}
    </Aside>
  );
};
