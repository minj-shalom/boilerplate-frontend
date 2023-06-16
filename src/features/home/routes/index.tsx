import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export function HomeRoutes() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
    </Routes>
  );
}
