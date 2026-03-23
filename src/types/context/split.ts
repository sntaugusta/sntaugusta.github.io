import { Dispatch, SetStateAction } from 'react';

export type ScreensLabel = 'Central' | 'Lateral';

export type ScreensKeys = 'center' | 'aside';

export type ScreensProps = {
  [key in ScreensKeys]: { label: ScreensLabel; width: number; height: number; lock: boolean };
};
export type ScreensImageProps = {
  [key in ScreensKeys]: string;
};

export interface ISplitContext {
  get: { stateScreens: ScreensProps; stateImages: ScreensImageProps };
  set: {
    setStateScreens: Dispatch<SetStateAction<ScreensProps>>;
    setStateImages: Dispatch<SetStateAction<ScreensImageProps>>;
  };
}
