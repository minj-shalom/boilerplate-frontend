import { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Spinner, MainLayout } from "@/components";
import { authorization } from "@/constants";
import { lazyImport } from "@/utils";
import { localStorage } from "@/configs";

const { HomeRoutes } = lazyImport(
  () => import("@/features/home"),
  "HomeRoutes"
);

export function Protected() {
  const location = useLocation();
  const token = localStorage.getItem(authorization);
  if (token) {
    return (
      <MainLayout>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    );
  }
  return <Navigate to="/auth/signin" state={{ redirect: location.pathname }} />;
}

export const ProtectedRoutes = [
  {
    path: "/home",
    element: <Protected />,
    children: [
      {
        path: "*",
        element: <HomeRoutes />,
      },
    ],
  },
  //   { path: "*", element: <NotFound /> },
];
