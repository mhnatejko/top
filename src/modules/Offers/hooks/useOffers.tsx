import { useEffect, useState } from "react";

import { countPromo, formatPrice } from "./helpers";
import { TMappedOffer } from "../types";

const useOffers = (offers: TMappedOffer[]) => {
  const [currentYearId, setCurrentYearId] = useState(() => offers[0].id);
  const [currentOffer, setCurrentOffer] = useState<TMappedOffer>(
    null as unknown as TMappedOffer
  );
  const [sum, setSum] = useState({
    baseSum: formatPrice(0),
  });

  useEffect(() => {
    const currentOffer = offers.find((el) => el.id === currentYearId);
    if (!currentOffer) return;

    setCurrentOffer(currentOffer);
  }, [currentYearId]);

  useEffect(() => {
    if (currentOffer) {
      const sum = countPromo(currentOffer);
      if (!sum) return;

      setSum(sum);
    }
  }, [currentOffer]);

  return {
    currentYearId,
    setCurrentYearId,
    currentOffer,
    setCurrentOffer,
    sum,
  };
};

export default useOffers;
