'use client';

import { ISplitContext, ScreensImageProps, ScreensProps } from '@/types/context/split';
import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

const screensInit: ScreensProps = {
  center: { label: 'Central', width: 1920, height: 1080, lock: true },
  aside: { label: 'Lateral', width: 1768, height: 768, lock: true },
};

const imagesInit: ScreensImageProps = {
  center: '',
  aside: '',
};

const SplitContext = createContext<ISplitContext>({
  get: { stateScreens: screensInit, stateImages: imagesInit },
  set: { setStateScreens: () => null, setStateImages: () => null },
});

export const SplitContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [stateScreens, setStateScreens] = useState(screensInit);
  const [stateImages, setStateImages] = useState(imagesInit);
  const values = {
    get: { stateScreens, stateImages },
    set: { setStateScreens, setStateImages },
  };
  return <SplitContext.Provider value={values}>{children}</SplitContext.Provider>;
};

export const useSplitContext = () => useContext(SplitContext);
