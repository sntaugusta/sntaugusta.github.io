import { ScreenSliceProps } from '@/types/components/screen-slice';
import { FC } from 'react';
import { ScreenButtonDownload } from './partials/button-download';
import { ScreenGroupField } from './partials/group-field';
import { SplitScreenScreens } from './partials/screens';
import * as S from './screen-slice.style';

export const ScreenSlice: FC<ScreenSliceProps> = (props) => {
  const { url } = props;

  return (
    <S.WrapperScreenSlice>
      <S.ScreenTools>
        <S.ScreenToolsInput>
          <ScreenGroupField screenKey="aside" />
          <ScreenGroupField screenKey="center" />
        </S.ScreenToolsInput>
        <ScreenButtonDownload />
      </S.ScreenTools>
      <SplitScreenScreens url={url} />
    </S.WrapperScreenSlice>
  );
};
