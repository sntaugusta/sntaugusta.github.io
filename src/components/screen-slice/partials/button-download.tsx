import { Button } from '@/components/button';
import { MouseEvent } from 'react';
import { useSplitScreenContext } from './screen-slice.context';

export const ScreenButtonDownload = () => {
  const {
    get: { stateScreens },
  } = useSplitScreenContext();

  const { url } = stateScreens.center;

  const handleClickDownload = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const anchorAside = document.createElement('a');
    const anchorCenter = document.createElement('a');
    anchorAside.download = `Split-${stateScreens.aside.label}.png`;
    anchorAside.href = stateScreens.aside.url;
    anchorCenter.download = `Split-${stateScreens.center.label}.png`;
    anchorCenter.href = stateScreens.center.url;
    anchorAside.click();
    anchorCenter.click();
  };

  return (
    <Button onClick={handleClickDownload} ratio="large" disabled={!url}>
      Download {stateScreens.aside.label} + {stateScreens.center.label}
    </Button>
  );
};
