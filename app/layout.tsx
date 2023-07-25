import "./globals.css";
import type { Metadata } from "next";
import { Grenze_Gotisch } from "next/font/google";

const gg = Grenze_Gotisch({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Darkest Todo",
  description: "Face the fearsome truth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gg.className}>{children}</body>
    </html>
  );
}
