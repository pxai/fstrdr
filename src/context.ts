import { createContext } from 'react';
import { Config } from "./api/interfaces";
import Api from './api';
import Auth from './api/auth';

export interface ContextProps {
    config: Config
    api: Api
    auth: Auth
    loggedIn: boolean
    setLogged: any
}

export const Context = createContext<ContextProps>(null);
