'use client';

import { ScreenSlice } from '@/components/screen-slice';
import { useAsideContext } from '@/context/aside.context';
import { ChangeEvent, useEffect, useState } from 'react';
import { SplitAside } from './partials/split-aside';

const PageSplit = () => {
  const [stateBlobURL, setStateBlobURL] = useState('');
  const {
    set: { setStateAside },
  } = useAsideContext();

  useEffect(() => {
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      if (target && target.files) {
        const [file] = target.files;
        const blob = URL.createObjectURL(file);
        setStateBlobURL(blob);
      }
    };
    setStateAside(<SplitAside onChange={handleChangeInput} />);
  }, [setStateAside]);

  return <ScreenSlice url={stateBlobURL} />;
};

export default PageSplit;
