import { EService, TMappedOffer } from "@/modules/Offers/types";

export const checkIsDisabled = (id: string, currentOffer: TMappedOffer) => {
  const isDecoder = id === EService.DecoderId;
  const isTvChecked = !currentOffer.prices.find(
    ({ id }) => id === EService.TvId
  )?.isChecked;

  return isDecoder && isTvChecked;
};

export const updateOffer = (
  prevOffer: TMappedOffer,
  value: string,
  checked: boolean
) => {
  const isTvUnchecked = value === EService.TvId && !checked;

  return {
    ...prevOffer,
    prices: prevOffer.prices.map((price) => {
      const isDecoder = price.id === EService.DecoderId;

      if (isTvUnchecked && isDecoder) return { ...price, isChecked: false };

      if (price.id === value) return { ...price, isChecked: checked };

      return price;
    }),
  };
};
