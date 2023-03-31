import { mockedResponse } from "@/services/api/mocks";
import { offersResponseMapper } from "./mappers";
import { TMappedOffer, TOffer } from "@/modules/Offers/types";

function fakeFetch<T>(): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockedResponse as T), 1000);
  });
}

export const getAllOffers = async (): Promise<{ data: TMappedOffer[] }> => {
  const data = await fakeFetch<TOffer[]>();

  return {
    data: offersResponseMapper(data),
  };
};
