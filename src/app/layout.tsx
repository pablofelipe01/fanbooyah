import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "@/app/thirdweb";
import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Be a FAN",
  description: "fanbooya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class">
          <ThirdwebProvider>
            {children}
            <SpeedInsights/>
          </ThirdwebProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
