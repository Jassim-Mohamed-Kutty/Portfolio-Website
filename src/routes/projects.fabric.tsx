import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/fabric")({
  component: () => <Outlet />,
});
