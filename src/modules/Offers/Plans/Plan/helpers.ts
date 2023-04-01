import { EService, TSelected } from "@/modules/Offers/types";

export const checkIsDisabled = (id: string, selected: TSelected) => {
  const isDecoder = id === EService.DecoderId;
  const isTvChecked = selected[EService.TvId];

  return isDecoder && !isTvChecked;
};

export const updateCheckedState = (value: string, checked: boolean) => {
  let newSelectedState = { [value]: checked };

  if (value === EService.TvId && !checked)
    return { ...newSelectedState, [EService.DecoderId]: false };

  return newSelectedState;
};
