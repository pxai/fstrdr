import { useContext } from 'react';
import { Context, ContextProps } from '../context';
import Api from 'src/api';

export const useApi = (): Api => (useContext(Context) as ContextProps).api;
