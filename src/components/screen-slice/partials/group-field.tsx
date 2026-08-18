import { Button } from '@/components/button';
import { IScreenFieldEvent, IScreenGroupField } from '@/types/components/screen-slice';
import { FC } from 'react';
import * as S from './group-field.style';
import { useSplitScreenContext } from './screen-slice.context';

export const ScreenGroupField: FC<IScreenGroupField> = (props) => {
  const { screenKey } = props;
  const {
    set: { setStateScreens },
    get: { stateScreens },
  } = useSplitScreenContext();
  const { label, height, width, url } = stateScreens[screenKey];
  const date = new Date().toLocaleDateString('sv');

  const handleChangeSize = ({ event, attr }: IScreenFieldEvent) => {
    const {
      currentTarget: { value },
    } = event;
    const valurReplace = String(value.replace(/\D/g, ''));
    setStateScreens((prevState) => {
      const content = prevState[screenKey];
      const settings = { width: content.width, height: content.height };
      if (content.lock) {
        settings.width = attr === 'width' ? Number(valurReplace) : Math.floor(Number(valurReplace) * (16 / 9));
        settings.height = attr === 'width' ? Math.floor(Number(valurReplace) * (9 / 16)) : Number(valurReplace);
      } else {
        settings[attr as keyof typeof settings] = Number(valurReplace);
      }
      return {
        ...prevState,
        [screenKey]: { ...content, width: settings.width, height: settings.height },
      };
    });
  };

  return (
    <S.ScreenToolsItem>
      <S.ScreenToolsTitle>{label}</S.ScreenToolsTitle>
      <S.ScreenToolsContent>
        <S.ScreenToolsField
          label="Width"
          type="text"
          after="px"
          value={width}
          maxLength={4}
          onInput={(e) => handleChangeSize({ event: e, attr: 'width' })}
        />
        <S.ScreenToolsField
          label="Height"
          type="text"
          after="px"
          value={height}
          maxLength={4}
          onInput={(e) => handleChangeSize({ event: e, attr: 'height' })}
        />
      </S.ScreenToolsContent>
      <Button as="a" href={url} download={url ? `Split-${label}-${date}.png` : ''} aria-disabled={!url}>
        Download {label}
      </Button>
    </S.ScreenToolsItem>
  );
};
