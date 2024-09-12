import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";

interface OrderTableSkeletonProps {
  rows: number;
}

export function OrderTableSkeleton({ rows }: OrderTableSkeletonProps) {
  return Array.from({ length: rows }).map((_, i) => (
    <TableRow key={i}>
      <TableCell>
        <Button disabled variant="outline" size="xm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>

      <TableCell>
        <Skeleton className="h-4 w-44" />
      </TableCell>

      <TableCell>
        <Skeleton className="h-4 w-36" />
      </TableCell>

      <TableCell>
        <Skeleton className="h-4 w-28" />
      </TableCell>

      <TableCell>
        <Skeleton className="h-4 w-52" />
      </TableCell>

      <TableCell>
        <Skeleton className="h-4 w-16" />
      </TableCell>

      <TableCell>
        <Skeleton className="h-4 w-24" />
      </TableCell>

      <TableCell>
        <Skeleton className="h-4 w-24" />
      </TableCell>
    </TableRow>
  ));
}
