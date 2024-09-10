import { api } from "@/lib/axios";

export interface OrderDetails {
  id: string;
}

export interface OrderDetailsResponse {
  status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
  id: string;
  createdAt: string;
  totalInCents: number;
  customer: {
    name: string;
    email: string;
    phone: string | null;
  };
  orderItems: {
    id: string;
    priceInCents: number;
    quantity: number;
    product: {
      name: string;
    };
  }[];
}

export async function getOrderDetails({ id }: OrderDetails) {
  const response = await api.get<OrderDetailsResponse>(`/orders/${id}`);

  return response.data;
}
