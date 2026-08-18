import { IInput } from '@/types/components/input';
import { ChangeEvent, FC } from 'react';
import * as S from './range.style';

export const RangeInput: FC<IInput> = (props) => {
  const { label, value, onChange } = props;

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <S.RangeWrapper>
      <S.RangeLabelWrapper>
        <S.RangeLabelText>{label}</S.RangeLabelText>
        <S.RangeLabelValue>{value}</S.RangeLabelValue>
      </S.RangeLabelWrapper>
      <input type="range" {...props} onChange={handleChangeInput} />
    </S.RangeWrapper>
  );
};
