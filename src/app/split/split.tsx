'use client';

import { Button } from '@/components/button';
import { useAsideContext } from '@/context/aside.context';
import { useSplitContext } from '@/context/pages/content';
import { MouseEvent, useEffect } from 'react';
import { SplitAside } from './partials/split-aside';
import * as S from './split.style';

const PageSplit = () => {
  const {
    set: { setStateAside },
  } = useAsideContext();
  const {
    get: { stateScreens, stateImages },
  } = useSplitContext();
  const date = new Date().toISOString();

  const handleClickDownload = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!stateImages.aside || !stateImages.center) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    setStateAside(<SplitAside />);
  }, [setStateAside]);

  return (
    <S.Wrapper>
      <S.ScreenDownload>
        <Button
          as="a"
          ratio="large"
          href={stateImages.aside}
          download={stateImages.aside ? `Split-${stateScreens.aside.label}-${date}.png` : ''}
          onClick={handleClickDownload}
        >
          Download lateral
        </Button>
        <Button
          as="a"
          ratio="large"
          href={stateImages.center}
          download={stateImages.aside ? `Split-${stateScreens.center.label}-${date}.png` : ''}
          onClick={handleClickDownload}
        >
          Download central
        </Button>
      </S.ScreenDownload>
      <S.Screens>
        <S.ScreensContent
          ratio={8 / 9}
          width="25%"
          style={{
            backgroundImage: `url(${stateImages.aside})`,
            backgroundPositionX: '0%',
            backgroundSize: '200% 100%',
          }}
        >
          <S.ScreenTitle>{stateScreens.aside.label} (Esquerda)</S.ScreenTitle>
          <S.ScreenSize>
            {stateScreens.aside.width / 2} x {stateScreens.aside.height}
          </S.ScreenSize>
        </S.ScreensContent>
        <S.ScreensContent
          ratio={16 / 9}
          width="50%"
          style={{ backgroundImage: `url(${stateImages.center})`, backgroundPositionX: '0%' }}
        >
          <S.ScreenTitle>{stateScreens.center.label}</S.ScreenTitle>
          <S.ScreenSize>
            {stateScreens.center.width} x {stateScreens.center.height}
          </S.ScreenSize>
        </S.ScreensContent>
        <S.ScreensContent
          ratio={8 / 9}
          width="25%"
          style={{
            backgroundImage: `url(${stateImages.aside})`,
            backgroundPositionX: '100%',
            backgroundSize: '200% 100%',
          }}
        >
          <S.ScreenTitle>{stateScreens.aside.label} (Direita)</S.ScreenTitle>
          <S.ScreenSize>
            {stateScreens.aside.width / 2} x {stateScreens.aside.height}
          </S.ScreenSize>
        </S.ScreensContent>
      </S.Screens>
    </S.Wrapper>
  );
};

export default PageSplit;
