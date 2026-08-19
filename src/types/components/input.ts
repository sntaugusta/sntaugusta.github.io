import { InputHTMLAttributes, ReactNode } from 'react';

export interface IInputChanged {
  url: string;
  zoom: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
}

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  shape?: 'circle' | 'square';
  after?: ReactNode;
  before?: ReactNode;
  onUpload?: (config: IInputChanged) => void;
  onChanged?: (config: IInputChanged) => void;
}
