import { createContext } from "react";
import { DataForOutfit } from "../App";
interface IIsCelsiusContext {
  isCelsius: boolean;
  setIsCelsius: React.Dispatch<React.SetStateAction<boolean>>;
}

export const IsCelsiusContext = createContext<IIsCelsiusContext>(null!);

interface IDataForOutfitContext {
  dataForOutfit: DataForOutfit | null;
  setDataForOutfit: React.Dispatch<React.SetStateAction<DataForOutfit | null>>;
}

export const DataForOutfitContext = createContext<IDataForOutfitContext>(null!);
