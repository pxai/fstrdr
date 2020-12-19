import { createContext } from 'react';
import { Config } from "./api/interfaces";
import Api from './api';

export interface ContextProps {
    config: Config
    api: Api
}

export const Context = createContext<ContextProps>(null);
