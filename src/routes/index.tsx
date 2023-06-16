import { useRoutes, Navigate } from "react-router-dom";
import { ProtectedRoutes } from "./Protected";
import { PublicRoutes } from "./Public";

export default function MainRoutes() {
  const redirect = [{ path: "/", element: <Navigate to="/home" /> }];
  const element = useRoutes([...PublicRoutes, ...ProtectedRoutes, ...redirect]);
  return element;
}
