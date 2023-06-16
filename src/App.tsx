import { MainProvider } from "./providers";
import MainRoutes from "./routes";

export function App() {
  return (
    <MainProvider>
      <MainRoutes />
    </MainProvider>
  );
}
