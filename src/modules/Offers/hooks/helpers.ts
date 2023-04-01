import { locales } from "@/consts/locales";
import { TMappedOffer, TPriceObj, TSelected } from "../types";

export const formatPrice = (price: number) =>
  Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(price);

const checkedServicesSum = (priceObj: TPriceObj, checkedIds: string[]) =>
  Object.entries(priceObj).reduce(
    (prev, [key, val]) => (checkedIds.includes(key) ? prev + val : prev),
    0
  );

const getPromoDescription = (promoId: string) =>
  locales.promotionDescriptions[promoId] || "";

export const countPromo = (offer: TMappedOffer, selected: TSelected) => {
  if (!offer) return;

  const { pricesObj, promotions } = offer;

  // count base sum - without promotion
  const checkedIds = Object.entries(selected)
    .filter(([_key, val]) => Boolean(val))
    .map(([key]) => key);
  const baseSum = checkedServicesSum(pricesObj, checkedIds);

  // find promotions
  const qualifyingPromos = promotions.filter((promotion) =>
    promotion.services.every((service) => checkedIds.includes(service))
  );

  if (!qualifyingPromos.length) return { baseSum: formatPrice(baseSum) };

  // count sum for every promotion
  const mappedQualifyingPromos = qualifyingPromos.map((promo) => {
    const mergedPrices = { ...pricesObj, ...promo.pricesObj };
    const promoSum = checkedServicesSum(mergedPrices, checkedIds);

    return {
      ...promo,
      promoSum,
    };
  });

  // get lowest promotion sum
  const { id, promoSum } = mappedQualifyingPromos.reduce(
    (prev, curr) => (prev.promoSum < curr.promoSum ? prev : curr),
    mappedQualifyingPromos[0]
  );

  if (baseSum < promoSum) return { baseSum: formatPrice(baseSum) };

  return {
    baseSum: formatPrice(baseSum),
    promoSum: formatPrice(promoSum),
    promoDescription: `promocyjna cena z pakietem ${getPromoDescription(id)}`,
  };
};
