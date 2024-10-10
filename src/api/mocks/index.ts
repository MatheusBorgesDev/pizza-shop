import { setupWorker } from "msw/browser";

import { env } from "@/env";

import { getGetDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount-mock";
import { getManagedRestaurantMock } from "./get-managed-restaurant-mock";
import { getMonthcanceledOrdersAmountMock } from "./get-month-canceled-orders-amount-mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount-mock";
import { getMonthrevenueMock } from "./get-month-revenue-mock";
import { getOrderDetailsMock } from "./get-order-details-mock";
import { getOrdersMock } from "./get-orders-mock";
import { getPopularProductsMock } from "./get-popular-products-mock";
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
  getOrdersMock,
  getOrderDetailsMock,
);

export async function enableMSW() {
  if (env.MODE !== "test") {
    return;
  }

  await worker.start();
}
