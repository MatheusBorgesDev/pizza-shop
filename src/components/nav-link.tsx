import { Link, LinkProps, useLocation } from "react-router-dom";

type NavLinkProps = LinkProps;

export function NavLink({ ...props }: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current-path={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current-path=true]:text-foreground"
      {...props}
    />
  );
}
