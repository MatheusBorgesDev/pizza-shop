import { http, HttpResponse } from "msw";

import { GetMonthRevenueResponse } from "../get-month-revenue";

export const getMonthrevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>("/metrics/month-receipt", async () => {
  return HttpResponse.json({ receipt: 3500000, diffFromLastMonth: 10 });
});
