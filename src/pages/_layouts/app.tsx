import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
