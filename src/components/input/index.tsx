import { IInput } from '@/types/components/input';
import { FC, useId } from 'react';
import { FileInput } from './file';
import { InputText } from './text';

export const Input: FC<IInput> = (props) => {
  const { type, id } = props;
  const autoId = useId();
  const propsId = id ?? autoId;
  const propsToElement = { ...props, id: propsId };

  if (type === 'checkbox') {
    return <input type={type} />;
  }
  if (type === 'color') {
    return <input type={type} />;
  }
  if (type === 'date') {
    return <input type={type} />;
  }
  if (type === 'datetime-local') {
    return <input type={type} />;
  }
  if (type === 'email') {
    return <input type={type} />;
  }
  if (type === 'file') {
    return <FileInput {...propsToElement} />;
  }
  if (type === 'hidden') {
    return <input type={type} />;
  }
  if (type === 'month') {
    return <input type={type} />;
  }
  if (type === 'number') {
    return <input type={type} />;
  }
  if (type === 'password') {
    return <input type={type} />;
  }
  if (type === 'radio') {
    return <input type={type} />;
  }
  if (type === 'range') {
    return <input type={type} />;
  }
  if (type === 'search') {
    return <input type={type} />;
  }
  if (type === 'submit') {
    return <input type={type} />;
  }
  if (type === 'tel') {
    return <input type={type} />;
  }
  if (type === 'text') {
    return <input type={type} />;
  }
  if (type === 'time') {
    return <input type={type} />;
  }
  if (type === 'url') {
    return <input type={type} />;
  }
  if (type === 'week') {
    return <input type={type} />;
  }
  return <InputText {...propsToElement} />;
};
