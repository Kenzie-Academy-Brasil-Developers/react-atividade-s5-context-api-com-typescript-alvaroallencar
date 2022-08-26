import { ReactNode, useContext } from "react";

import {useCart, CartProvider} from "./Cart/index"

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({children}: ProviderProps) => (
  
)