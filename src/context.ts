import { createContext } from 'react';
import { Config } from "./api/interfaces";

export interface ContextProps {
    config: Config
}

export const Context = createContext<ContextProps>(null);
