'use client';

import { ScreenSlice } from '@/components/screen-slice';
import { useAsideContext } from '@/context/aside.context';
import { IInputChanged } from '@/types/components/input';
import { useEffect, useState } from 'react';
import { KidsAside } from './partials/kids-aside';

const PageSplit = () => {
  const [stateBlobURL, setStateBlobURL] = useState({ url: '', name: '' });
  const {
    set: { setStateAside },
  } = useAsideContext();

  useEffect(() => {
    const handleChangedInput = (e: IInputChanged) => {
      const { url, name } = e;
      if (url) {
        setStateBlobURL({ url, name });
      }
    };
    setStateAside(<KidsAside onChanged={handleChangedInput} />);
  }, [setStateAside]);

  return <ScreenSlice url={stateBlobURL.url} name={stateBlobURL.name} />;
};

export default PageSplit;
