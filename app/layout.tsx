import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusFont = Plus_Jakarta_Sans({
  subsets:['latin']
})




export const metadata: Metadata = {
  title: "landing page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusFont.className}>
        {children}
      </body>
    </html>
  );
}
