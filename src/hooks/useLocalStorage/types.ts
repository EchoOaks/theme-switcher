import { Dispatch, SetStateAction } from 'react';

export type UseLocalStorageResponse<T> = [T, Dispatch<SetStateAction<T>>];
