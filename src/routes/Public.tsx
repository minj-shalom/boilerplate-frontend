import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthLayout, Spinner } from "@/components";
import { lazyImport } from "@/utils";

const { AuthRoutes } = lazyImport(
  () => import("@/features/auth"),
  "AuthRoutes"
);

export function Public() {
  return (
    <AuthLayout>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  );
}

export const PublicRoutes = [
  {
    path: "/auth/*",
    element: <Public />,
    children: [
      {
        path: "*",
        element: <AuthRoutes />,
      },
      {
        path: "",
        element: <Navigate to="/auth/signin" />,
      },
    ],
  },
];
