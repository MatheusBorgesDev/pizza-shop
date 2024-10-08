import { setupWorker } from "msw/browser";

import { env } from "@/env";

import { getGetDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getMonthcanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";
import { getMonthrevenueMock } from "./get-month-revenue";
import { getPopularProductsMock } from "./get-popular-products";
import { getProfileMock } from "./get-profile-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { signInMock } from "./sign-in-mock";
import { updateProfileMock } from "./update-profile-mock";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthcanceledOrdersAmountMock,
  getMonthrevenueMock,
  getPopularProductsMock,
  getGetDailyRevenueInPeriodMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
