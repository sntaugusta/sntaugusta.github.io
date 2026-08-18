import { IScreenSliceContext, ScreenSliceInit } from '@/types/components/screen-slice';
import { usePathname } from 'next/navigation';
import { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';

const screensInit: ScreenSliceInit = {
  center: { label: 'Central', width: 1920, height: 1080, lock: true, url: '' },
  aside: { label: 'Lateral', width: 1366, height: 768, lock: true, url: '' },
};

const SplitScreenContext = createContext<IScreenSliceContext>({
  get: { stateScreens: screensInit },
  set: { setStateScreens: () => null },
});

export const SplitScreenContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [stateScreens, setStateScreens] = useState(screensInit);
  const pathname = usePathname();
  const values = {
    get: { stateScreens },
    set: { setStateScreens },
  };

  useEffect(() => {
    setStateScreens(screensInit);
  }, [pathname]);

  return <SplitScreenContext.Provider value={values}>{children}</SplitScreenContext.Provider>;
};

export const useSplitScreenContext = () => useContext(SplitScreenContext);
