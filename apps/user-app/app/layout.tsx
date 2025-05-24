
import "./globals.css";
import type { Metadata } from "next";
;
import { Providers } from "./providers";
import { AppbarClient } from "../components/AppbarClient";
import { JSX } from "react/jsx-runtime";


export const metadata: Metadata = {
  title: "PaisaKaro",
  description: "send Money your friend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
        <AppbarClient />
        <body >{children}</body>
      </Providers>
    </html>
  );
}
