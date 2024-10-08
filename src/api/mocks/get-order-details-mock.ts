import { http, HttpResponse } from "msw";

import { OrderDetails, OrderDetailsResponse } from "../get-order-details";

type OrderItems = OrderDetailsResponse["orderItems"];

const orderItems: OrderItems = [
  {
    id: "1",
    product: {
      name: "Pizza Margherita",
    },
    priceInCents: 1200,
    quantity: 2,
  },
  {
    id: "2",
    product: {
      name: "Pizza Pepperoni",
    },
    priceInCents: 1500,
    quantity: 1,
  },
  {
    id: "3",
    product: {
      name: "Pizza Quattro Stagioni",
    },
    priceInCents: 1800,
    quantity: 1,
  },
];

export const getOrderDetailsMock = http.get<
  OrderDetails,
  never,
  OrderDetailsResponse
>("/orders/:orderId", ({ params }) => {
  const totalInCents = orderItems.reduce(
    (total, item) => total + item.priceInCents * item.quantity,
    0,
  );

  return HttpResponse.json({
    id: params.id,
    customer: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "49123456789",
    },
    status: "pending",
    createdAt: new Date().toISOString(),
    orderItems,
    totalInCents,
  });
});
