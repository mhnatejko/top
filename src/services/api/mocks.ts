import { TOffer } from "@/modules/Offers/types";

export const mockedResponse: TOffer[] = [
  {
    id: "2023_id",
    year: "2023",
    promotionRules: [
      {
        id: "int_tv_id",
        services: ["internet_id", "tv_id"],
        prices: [
          {
            id: "internet_id",
            value: 79,
          },
          {
            id: "tv_id",
            value: 0,
          },
        ],
      },
      {
        id: "int_pho_id",
        services: ["internet_id", "phone_id"],
        prices: [
          {
            id: "internet_id",
            value: 64,
          },
          {
            id: "phone_id",
            value: 0,
          },
        ],
      },
      {
        id: "int_tv_dec_id",
        services: ["internet_id", "tv_id", "decoder_id"],
        prices: [
          {
            id: "decoder_id",
            value: 0,
          },
        ],
      },
    ],
    prices: [
      {
        id: "internet_id",
        value: 39,
      },
      {
        id: "tv_id",
        value: 49,
      },
      {
        id: "phone_id",
        value: 29,
      },
      {
        id: "decoder_id",
        value: 29,
      },
    ],
  },
  {
    id: "2024_id",
    year: "2024",
    promotionRules: [
      {
        id: "int_tv_id",
        services: ["internet_id", "tv_id"],
        prices: [
          {
            id: "internet_id",
            value: 89 / 2,
          },
          {
            id: "tv_id",
            value: 89 / 2,
          },
        ],
      },
      {
        id: "int_pho_id",
        services: ["internet_id", "phone_id"],
        prices: [
          {
            id: "internet_id",
            value: 64 / 2,
          },
          {
            id: "phone_id",
            value: 64 / 2,
          },
        ],
      },
      {
        id: "int_tv_dec_id",
        services: ["internet_id", "tv_id", "decoder_id"],
        prices: [
          {
            id: "decoder_id",
            value: 0,
          },
        ],
      },
    ],
    prices: [
      {
        id: "internet_id",
        value: 49,
      },
      {
        id: "tv_id",
        value: 49,
      },
      {
        id: "phone_id",
        value: 29,
      },
      {
        id: "decoder_id",
        value: 29,
      },
    ],
  },
  {
    id: "2025_id",
    year: "2025",
    promotionRules: [
      {
        id: "int_tv_id",
        services: ["internet_id", "tv_id"],
        prices: [
          {
            id: "internet_id",
            value: 99 / 2,
          },
          {
            id: "tv_id",
            value: 99 / 2,
          },
        ],
      },
      {
        id: "int_pho_id",
        services: ["internet_id", "phone_id"],
        prices: [
          {
            id: "internet_id",
            value: 64 / 2,
          },
          {
            id: "phone_id",
            value: 64 / 2,
          },
        ],
      },
      {
        id: "int_tv_dec_id",
        services: ["internet_id", "tv_id", "decoder_id"],
        prices: [
          {
            id: "decoder_id",
            value: 0,
          },
        ],
      },
    ],
    prices: [
      {
        id: "internet_id",
        value: 59,
      },
      {
        id: "tv_id",
        value: 59,
      },
      {
        id: "phone_id",
        value: 29,
      },
      {
        id: "decoder_id",
        value: 29,
      },
    ],
  },
];
