import { http, HttpResponse } from "msw";

import { GetMonthCanceledOrdersAmountResponse } from "../get-month-canceled-orders-amount";

export const getMonthcanceledOrdersAmountMock = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>("/metrics/month-canceled-orders-amount", async () => {
  return HttpResponse.json({ amount: 100, diffFromLastMonth: 2 });
});
