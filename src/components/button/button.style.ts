import styled from '@emotion/styled';
import { ButtonHTMLAttributes, ElementType, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  ratio?: 'x-small' | 'small' | 'normal' | 'large' | 'x-large';
  as?: ElementType;
  href?: string;
  download?: string;
  icon?: ReactNode;
}

const fontSize = (size?: IButton['ratio']) => {
  if (size === 'x-large') {
    return '32px';
  }
  if (size === 'large') {
    return '24px';
  }
  if (size === 'small') {
    return '12px';
  }
  if (size === 'x-small') {
    return '8px';
  }
  return '16px';
};

const padding = (size?: IButton['ratio']) => {
  if (size === 'x-large') {
    return '8px 32px';
  }
  if (size === 'large') {
    return '8px 24px';
  }
  if (size === 'small') {
    return '4px 12px';
  }
  if (size === 'x-small') {
    return '2px 6px';
  }
  return '6px 16px';
};

export const IconButton = styled.span`
  &:empty {
    width: 0px;
  }
`;

export const TextButton = styled.span`
  white-space: nowrap;
`;

export const WrapperButton = styled.button<IButton>`
  display: flex;
  border-radius: 4px;
  background-color: #fff3;
  align-items: center;
  gap: 4px;
  font-size: ${({ ratio }) => fontSize(ratio)};
  padding: ${({ ratio }) => padding(ratio)};
  border-radius: 4px;
  cursor: pointer;
  &:hover:not(:disabled) {
    background-color: #fff;
    color: #006;
    fill: #006;
  }
  &:disabled {
    cursor: not-allowed;
  }
  ${IconButton} {
    width: ${({ ratio }) => fontSize(ratio)};
    height: ${({ ratio }) => fontSize(ratio)};
  }
`;
