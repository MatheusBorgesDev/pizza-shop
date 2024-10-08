import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function OrderDetailsSkeleton() {
  return (
    <div className="space-y-6">
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="text-muted-foreground">Status</TableCell>
            <TableCell className="flex justify-end">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-28" />
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Cliente</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-40" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Telefone</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-36" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">E-mail</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-48" />
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="text-muted-foreground">Realizado</TableCell>
            <TableCell className="flex justify-end">
              <Skeleton className="h-5 w-36" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Quantidade</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {Array.from({ length: 2 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton className="h-5 w-36" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="ml-auto h-5 w-3" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="ml-auto h-5 w-12" />
              </TableCell>
              <TableCell className="text-right">
                <Skeleton className="ml-auto h-5 w-12" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="text-right font-semibold">
              <Skeleton className="h-5 w-20" />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
