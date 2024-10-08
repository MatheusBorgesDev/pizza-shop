import { http, HttpResponse } from "msw";

import { GetManagedRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", async () => {
  return HttpResponse.json({
    id: "1",
    name: "Pizza Shop",
    description: "Custom restaurant description",
    managerId: "custom-restaurant-id",
    createdAt: new Date(),
    updatedAt: null,
  });
});
