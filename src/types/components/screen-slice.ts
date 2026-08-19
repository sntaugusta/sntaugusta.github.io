import { Dispatch, InputEvent, InputHTMLAttributes, SetStateAction } from 'react';

export type ScreenSliceLabel = 'Central' | 'Lateral';

export type ScreenSliceKeys = 'center' | 'aside';

export type ScreenSliceInit = {
  [key in ScreenSliceKeys]: { label: ScreenSliceLabel; width: number; height: number; lock: boolean; url: string };
};

export type ScreenSliceProps = { url: string; name?: string };

export interface IScreenButton {
  href: string;
  label: string;
}

export interface IScreenField {
  label: string;
  value: number;
  onInput: InputHTMLAttributes<HTMLInputElement>['onInput'];
}

export interface IScreenGroupField {
  screenKey: ScreenSliceKeys;
  name?: string;
}

export interface IScreenFieldEvent {
  event: InputEvent<HTMLInputElement>;
  attr: keyof ScreenSliceInit[keyof ScreenSliceInit];
}

export interface IScreenSliceContext {
  get: { stateScreens: ScreenSliceInit };
  set: { setStateScreens: Dispatch<SetStateAction<ScreenSliceInit>> };
}
