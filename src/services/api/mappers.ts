import { locales } from "@/consts/locales";
import { TOffer, TPrice } from "@/modules/Offers/types";

const pricesArrayToObject = (prices: TPrice[]) =>
  prices.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.id]: curr.value,
    }),
    {}
  );

export const offersResponseMapper = (offers: TOffer[]) => {
  return offers.map((offer) => {
    const { promotionRules, prices, ...restOffer } = offer;

    const pricesObj = pricesArrayToObject(prices);
    const promotions = promotionRules.map(({ prices, ...restPromotion }) => ({
      ...restPromotion,
      pricesObj: pricesArrayToObject(prices),
    }));
    const mappedPrices = prices.map((price) => ({
      ...price,
      label: locales.labels[price.id] || price.id,
      isChecked: false,
    }));
    const selected = prices.reduce(
      (prev, curr) => ({ ...prev, [curr.id]: false }),
      {}
    );

    return {
      ...restOffer,
      prices: mappedPrices,
      pricesObj,
      promotions,
      selected,
    };
  });
};
