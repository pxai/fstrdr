import { useContext } from 'react';
import { Context, ContextProps } from '../context';
import Auth from 'src/api/auth';

export default function useAuth (): Auth {
  return (useContext(Context) as ContextProps).auth
}
