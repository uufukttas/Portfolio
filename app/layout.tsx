import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "uufukttas.",
  description: "Portfolio Page of Ufuk Tas. Developed by Ufuk Tas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={montserrat.className} lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};
