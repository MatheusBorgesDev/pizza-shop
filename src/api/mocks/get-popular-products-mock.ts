import { http, HttpResponse } from "msw";

import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", async () => {
  return HttpResponse.json([
    { product: "Apple", amount: 10 },
    { product: "Banana", amount: 8 },
    { product: "Orange", amount: 7 },
    { product: "Pineapple", amount: 9 },
    { product: "Strawberry", amount: 6 },
  ]);
});
