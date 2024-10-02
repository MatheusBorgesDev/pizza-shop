import { http, HttpResponse } from "msw";

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getGetDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", async () => {
  return HttpResponse.json([
    { date: "2021-10-01", receipt: 100 },
    { date: "2021-10-02", receipt: 200 },
    { date: "2021-10-03", receipt: 300 },
    { date: "2021-10-04", receipt: 400 },
    { date: "2021-10-05", receipt: 500 },
    { date: "2021-10-06", receipt: 600 },
    { date: "2021-10-07", receipt: 700 },
  ]);
});
