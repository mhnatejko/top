import { useEffect, useState } from "react";

import { countPromo, formatPrice } from "./helpers";
import { TMappedOffer, TSelected } from "../types";

const useOffers = (offers: TMappedOffer[]) => {
  const [currentYearId, setCurrentYearId] = useState(() => offers[0].id);
  const [currentOffer, setCurrentOffer] = useState<TMappedOffer>(
    null as unknown as TMappedOffer
  );
  const [selected, setSelected] = useState<TSelected>({});
  const [sum, setSum] = useState({
    baseSum: formatPrice(0),
  });

  useEffect(() => {
    const currentOffer = offers.find((el) => el.id === currentYearId);
    if (!currentOffer) return;

    setCurrentOffer(currentOffer);
    setSelected(currentOffer.selected);
  }, [currentYearId]);

  useEffect(() => {
    if (selected) {
      const sum = countPromo(currentOffer, selected);
      if (!sum) return;

      setSum(sum);
    }
  }, [selected]);

  return {
    currentYearId,
    setCurrentYearId,
    currentOffer,
    setCurrentOffer,
    selected,
    setSelected,
    sum,
  };
};

export default useOffers;
