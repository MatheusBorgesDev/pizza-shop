import { setupWorker } from "msw/browser";

import { env } from "@/env";

import { getGetDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getMonthcanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getMonthrevenueMock } from "./get-month-revenue";
import { getPopularProductsMock } from "./get-popular-products";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { signInMock } from "./sign-in-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthcanceledOrdersAmountMock,
  getMonthrevenueMock,
  getPopularProductsMock,
  getGetDailyRevenueInPeriodMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
