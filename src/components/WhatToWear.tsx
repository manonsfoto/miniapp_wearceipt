import { useContext, useEffect, useState } from "react";
import { DataForOutfitContext, IsCelsiusContext } from "../context/Context";
import { getClothingSuggestion } from "../utils/functions";

type TClothing = {
  base: string[];
  insulating: string[];
  outer: string[];
  accessories: string[];
};
const WhatToWear = () => {
  const { isCelsius } = useContext(IsCelsiusContext);
  const { dataForOutfit } = useContext(DataForOutfitContext);

  const [clothing, setClothing] = useState<TClothing | null>(null);

  useEffect(() => {
    setClothing(() =>
      getClothingSuggestion(
        dataForOutfit?.feelsLikeTemp as number,
        dataForOutfit?.weatherDescription || "",
        isCelsius
      )
    );
  }, [dataForOutfit]);
  return (
    <ul className="w-full">
      <li className="font-KodeMono-SemiBold">Base Layer</li>
      {clothing?.base.map((c, i) => (
        <li key={c}>
          {(i + 1).toString().padStart(2, "0")} {c}
        </li>
      ))}
      <li className="font-KodeMono-SemiBold">Insulating Layer</li>
      {clothing?.insulating.map((c, i) => (
        <li key={c}>
          {(i + 1).toString().padStart(2, "0")} {c}
        </li>
      ))}
      <li className="font-KodeMono-SemiBold">Outer Layer</li>
      {clothing?.outer.map((c, i) => (
        <li key={c}>
          {(i + 1).toString().padStart(2, "0")} {c}
        </li>
      ))}
      {clothing?.accessories && clothing?.accessories?.length > 0 && (
        <>
          <li className="font-KodeMono-SemiBold">Accessories</li>
          {clothing?.accessories.map((c, i) => (
            <li key={c}>
              {(i + 1).toString().padStart(2, "0")} {c}
            </li>
          ))}
        </>
      )}
    </ul>
  );
};

export default WhatToWear;
