import { IInput } from '@/types/components/input';
import { ChangeEvent, FC, useState } from 'react';
import { IconUpload } from '../icons';
import * as S from './file.style';

export const FileInput: FC<IInput> = (props) => {
  const { id, label, multiple, onChange, accept = 'image/jpeg, image/png' } = props;
  const [stateBlob, setStateBlob] = useState('');
  const [stateFilename, setStateFilename] = useState('');

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e;
    if (currentTarget && currentTarget.files) {
      const [file] = currentTarget.files;
      if (file) {
        const blob = URL.createObjectURL(file);
        setStateFilename(file.name);
        setStateBlob(blob);
        if (onChange) {
          onChange(e);
        }
        setTimeout(() => {
          e.target.value = '';
        }, 1000);
      }
    }
  };

  return multiple ? (
    <input type="file" id={id} />
  ) : (
    <S.File htmlFor={id} title={stateFilename} hasImage={stateBlob.length > 1}>
      <IconUpload />
      <S.Filename>{label}</S.Filename>
      <input type="file" id={id} accept={accept} onChange={handleChangeFile} />
      <S.FilePreview style={{ backgroundImage: `url(${stateBlob})` }} />
    </S.File>
  );
};
