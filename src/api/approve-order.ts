import { api } from "@/lib/axios";

export interface ApproveOrder {
  orderId: string;
}

export async function ApproveOrder({ orderId }: ApproveOrder) {
  await api.patch(`/orders/${orderId}/approve`);
}
