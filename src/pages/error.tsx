import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError() as Error;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Ops! Algo deu errado...</h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação. Mais detalhes abaixo:
      </p>
      <div className="rounded-sm bg-accent p-2">
        <pre>{error?.message || JSON.stringify(error)}</pre>
      </div>
      <p className="mt-5 text-accent-foreground">
        Voltar para o{" "}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  );
}
