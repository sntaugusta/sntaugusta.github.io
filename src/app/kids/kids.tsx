'use client';

import { ScreenSlice } from '@/components/screen-slice';
import { useAsideContext } from '@/context/aside.context';
import { IInputChanged } from '@/types/components/input';
import { useEffect, useState } from 'react';
import { KidsAside } from './partials/kids-aside';

const PageSplit = () => {
  const [stateBlobURL, setStateBlobURL] = useState('');
  const {
    set: { setStateAside },
  } = useAsideContext();

  useEffect(() => {
    const handleChangedInput = (e: IInputChanged) => {
      const { url } = e;
      if (url) {
        setStateBlobURL(url);
      }
    };
    setStateAside(<KidsAside onChanged={handleChangedInput} />);
  }, [setStateAside]);

  return <ScreenSlice url={stateBlobURL} />;
};

export default PageSplit;
