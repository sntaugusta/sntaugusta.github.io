import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface IAsideContext {
  get: { stateAside: ReactNode };
  set: { setStateAside: Dispatch<SetStateAction<ReactNode>> };
}
