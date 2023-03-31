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

export type TMappedOffer = {
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
  id: string;
  year: string;
};

export type TService = { [key: string]: boolean };
