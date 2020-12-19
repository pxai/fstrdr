import { useContext } from 'react';
import { Context, ContextProps } from '../context';
import Config from 'src/api/interfaces';

export default function useConfig (): Config {
  return (useContext(Context) as ContextProps).config
}
