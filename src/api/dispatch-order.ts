import { api } from "@/lib/axios";

export interface DispatchOrderParams {
  orderId: string;
}

export function dispatchOrder({ orderId }: DispatchOrderParams) {
  return api.patch(`/orders/${orderId}/dispatch`);
}
