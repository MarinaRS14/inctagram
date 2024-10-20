import { ReactNode } from 'react';

export type Replace<T, U> = Omit<T, keyof U> & U;

export type PropsWithoutChildren<P = unknown> = P extends { children?: ReactNode | undefined }
  ? Omit<P, 'children'>
  : never;
