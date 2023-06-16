import { AuthLayoutContainer } from "./styles";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
}
