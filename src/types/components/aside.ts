import { ScreensProps } from '@/types/context/split';
import { ChangeEvent } from 'react';

export interface IHandleChangeSize {
  event: ChangeEvent<HTMLInputElement>;
  attr: keyof ScreensProps[keyof ScreensProps];
  key: keyof ScreensProps;
}
