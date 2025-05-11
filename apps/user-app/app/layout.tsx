import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import { ReactElement } from "react";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaisaKaro",
  description: "send Money your friend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (<html lang="en">
    <Providers>
      <body >{children}</body>
    </Providers>
  </html>
  );
}
