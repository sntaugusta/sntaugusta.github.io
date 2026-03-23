import { IInput } from '@/types/components/input';
import { FC } from 'react';
import * as S from './crop.style';
import { FileInput } from './file';

export const CropInput: FC<IInput> = (props) => {
  return (
    <S.WrapperCrop>
      <FileInput {...props} label="Photo" />
    </S.WrapperCrop>
  );
};
