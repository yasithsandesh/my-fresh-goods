import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";
import LoadingSreen from "@/components/ui/loadingSreen";
import { Suspense } from "react";
import Loading from "./loading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "my fresh goods",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth`} suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
        <Header />
          <Suspense fallback={<Loading />}>
          
            <main className=" mx-auto w-full h-auto">{children}</main>
 
          </Suspense>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <script
          type="text/javascript"
          src="https://www.payhere.lk/lib/payhere.js"
        ></script>
      </body>
    </html>
  );
}
