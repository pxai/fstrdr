import { useContext } from 'react';
import { Context, ContextProps } from '../context';
import Config from 'src/api/interfaces';

export const useConfig = (): Api => (useContext(Context) as ContextProps).config;
