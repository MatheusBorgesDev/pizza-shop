import { api } from "@/lib/axios";

interface DispatchOrderParams {
  orderId: string;
}

export function dispatchOrder({ orderId }: DispatchOrderParams) {
  return api.patch(`/orders/${orderId}/dispatch`);
}
