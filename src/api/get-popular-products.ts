import { api } from "@/lib/axios";

type GetPopularProductsResponse = {
  product: string | null;
  amount: number;
}[];

export async function getPopularProducts() {
  const response = await api.get<GetPopularProductsResponse>(
    "/metrics/popular-products",
  );

  return response.data;
}
