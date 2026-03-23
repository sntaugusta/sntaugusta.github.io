import { Dispatch, SetStateAction } from 'react';

export interface IStreamMessageContext {
  get: { stateButtonCopyDisabled: boolean; stateTextCode: string };
  set: {
    setStateButtonCopyDisabled: Dispatch<SetStateAction<boolean>>;
    setStateTextCode: Dispatch<SetStateAction<string>>;
  };
}
