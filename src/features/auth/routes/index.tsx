import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "./SignIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="signin" element={<SignIn />} />
      <Route path="*" element={<Navigate to="/auth/signin" />} />
    </Routes>
  );
}
