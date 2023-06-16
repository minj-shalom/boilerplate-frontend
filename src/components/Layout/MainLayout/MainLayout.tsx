import { MainLayoutContainer } from "./styles";

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return <MainLayoutContainer>{children}</MainLayoutContainer>;
}
