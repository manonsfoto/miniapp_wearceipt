import { useContext, useState } from "react";
import { DataForOutfitContext, IsCelsiusContext } from "../context/Context";

type TSpecialClothing = { outer_layer: string[]; accessories: string[] };
type TClothing = {
  base: string[];
  insulating: string[];
  outer: string[];
  accessories: string[];
};
const WhatToWear = () => {
  const { isCelsius } = useContext(IsCelsiusContext);
  const { dataForOutfit } = useContext(DataForOutfitContext);

  const [specialClothing, setSpecialClothing] =
    useState<TSpecialClothing | null>(null);
  const [clothing, setClothing] = useState<TClothing | null>(null);
  return <ul>What To Wear</ul>;
};

export default WhatToWear;
