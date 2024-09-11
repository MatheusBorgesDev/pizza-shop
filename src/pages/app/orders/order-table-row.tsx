import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowRight, Search, X } from "lucide-react";
import { useState } from "react";

import { ApproveOrder } from "@/api/approve-order";
import { CancelOrder } from "@/api/cancel-order";
import { GetOrdersResponse } from "@/api/get-orders";
import { OrderStatus, OrderStatusType } from "@/components/order-status";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatPrice } from "@/utils/price-formatter";

import { OrderDetails } from "./order-details";

interface OrderTableRowProps {
  order: {
    orderId: string;
    createdAt: Date;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  };
}

export function OrderTableRow({ order }: OrderTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const queryClient = useQueryClient();

  function updateOrderStatusOnCache(orderId: string, status: OrderStatusType) {
    const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
      queryKey: ["orders"],
    });

    ordersListCache.forEach(([cacheKey, cacheData]) => {
      if (!cacheData) return;

      queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
        ...cacheData,
        orders: cacheData.orders.map((order) => {
          if (order.orderId === orderId) {
            return {
              ...order,
              status,
            };
          }

          return order;
        }),
      });
    });
  }

  const { mutateAsync: CancelOrderFn } = useMutation({
    mutationFn: CancelOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "canceled");
    },
  });

  const { mutateAsync: approveOrderFn } = useMutation({
    mutationFn: ApproveOrder,
    async onSuccess(_, { orderId }) {
      updateOrderStatusOnCache(orderId, "processing");
    },
  });

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xm">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails orderId={order.orderId} open={isDetailsOpen} />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>

      <TableCell>
        <span className="text-muted-foreground">
          {formatDistanceToNow(order.createdAt, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
      </TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>

      <TableCell className="font-medium">{order.customerName}</TableCell>

      <TableCell className="font-medium">{formatPrice(order.total)}</TableCell>

      <TableCell>
        <Button
          disabled={order.status !== "pending"}
          onClick={() => approveOrderFn({ orderId: order.orderId })}
          variant="outline"
          size="xm"
        >
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell>
        <Button
          disabled={!["pending", "processing"].includes(order.status)}
          onClick={() => CancelOrderFn({ orderId: order.orderId })}
          variant="ghost"
          size="xm"
        >
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
