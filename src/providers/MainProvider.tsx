import { ConfigProvider } from "antd";
import i18next from "i18next";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { initReactI18next } from "react-i18next";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { Spinner } from "@/components";
import { DEFAULT_LANGUAGE, localStorage, queryClient } from "@/configs";
import { defaultLanguage } from "@/constants";
import { GlobalStyle, ThemeProvider, globalAntTheme, theme } from "@/styles";
import { en, ko } from "@/translations";

type MainProviderProps = {
  children: React.ReactNode;
};

export function MainProvider({ children }: MainProviderProps) {
  /*
   * @param lng: 로컬 스토리지에 저장되어 있는 언어 키값을 가져옵니다.
   * @param fallbackLng: 로컬 스토리지에 언어 키값이 없을 경우 env로 주입받은 언어 키값을 가져옵니다.
   */
  i18next.use(initReactI18next).init({
    lng: localStorage.getItem(defaultLanguage),
    fallbackLng: DEFAULT_LANGUAGE,
    resources: {
      en: en,
      ko: ko,
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <ConfigProvider theme={globalAntTheme}>
        <HelmetProvider>
          {/* <ErrorBoundary FallbackComponent={Error}> */}
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>{children}</BrowserRouter>
            </QueryClientProvider>
          </ThemeProvider>
          {/* </ErrorBoundary> */}
        </HelmetProvider>
      </ConfigProvider>
    </Suspense>
  );
}
