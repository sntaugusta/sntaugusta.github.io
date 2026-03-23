import { ScreensProps } from '@/types/context/upload';
import { ChangeEvent } from 'react';

export interface IHandleChangeSize {
  event: ChangeEvent<HTMLInputElement>;
  attr: keyof ScreensProps[keyof ScreensProps];
  key: keyof ScreensProps;
}
