import { api } from "@/lib/axios";

interface RegisterRestaurantBody {
  restaurantName: string;
  managerName: string;
  phone: string;
  email: string;
}

export async function RegisterRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post("/restaurants", { restaurantName, managerName, email, phone });
}
