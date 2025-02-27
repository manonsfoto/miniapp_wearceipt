import { createContext } from "react";
interface IIsCelsiusContext {
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsCelsiusContext = createContext<IIsCelsiusContext>(null!);
