import Script from "next/script";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import "../styles/global.css";
import TanstackProvider from "./provider";
import Header from "./components/layout/Header";
import Wrapper from "./components/layout/Wrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>[TDD] NextJS</title>
      </head>
      <body>
        <TanstackProvider>
          <AppRouterCacheProvider>
            <Header />
            <Wrapper>{children}</Wrapper>
          </AppRouterCacheProvider>
        </TanstackProvider>
        <Script
          src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_ID}`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
