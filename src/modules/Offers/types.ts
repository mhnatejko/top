export enum EService {
  InternetId = "internet_id",
  TvId = "tv_id",
  PhoneId = "phone_id",
  DecoderId = "decoder_id",
}

export type TPrice = {
  id: string;
  value: number;
};

export type TOffer = {
  id: string;
  year: string;
  promotionRules: { id: string; services: string[]; prices: TPrice[] }[];
  prices: TPrice[];
};

export type TSum = {
  baseSum: string | number;
  promoSum?: string;
  promoDescription?: string;
};

export type TPriceObj = { [key: string]: number };
export type TSelected = { [key: string]: boolean };

export type TMappedOffer = {
  id: string;
  year: string;
  selected: TSelected;
  prices: {
    label: string;
    isChecked: boolean;
    id: string;
    value: number;
  }[];
  pricesObj: TPriceObj;
  promotions: {
    pricesObj: TPriceObj;
    id: string;
    services: string[];
  }[];
};

export type TService = { [key: string]: boolean };
