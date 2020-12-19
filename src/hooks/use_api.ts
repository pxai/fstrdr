import { useContext } from 'react';
import { Context, ContextProps } from '../context';
import Api from 'src/api';

export default function useApi (): Api {
  return (useContext(Context) as ContextProps).api
}
