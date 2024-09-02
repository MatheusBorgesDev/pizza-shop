import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

// interface OrderTableRowProps {}

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size="xm">
          <Search className="h-3 w-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        01asbf546sdf1045asd
      </TableCell>

      <TableCell>Há 15 minutos</TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>

      <TableCell className="font-medium">João da Silva</TableCell>

      <TableCell className="font-medium">R$ 150,00</TableCell>

      <TableCell>
        <Button variant="outline" size="xm">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="xm">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
