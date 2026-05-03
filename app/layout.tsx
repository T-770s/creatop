import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creatop Universe — עולם עסקים תלת מימדי",
  description: "העולם הדיגיטלי התלת-מימדי הראשון לעסקים. גלה, חווה ותתנסה ב-1000+ עסקים בחוויה ויזואלית מהפכנית.",
  keywords: ["עולם תלת מימד", "קניון דיגיטלי", "metaverse עברית", "creatop universe"],
  openGraph: {
    title: "Creatop Universe",
    description: "העולם הדיגיטלי התלת-מימדי הראשון לעסקים",
    locale: "he_IL",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className="h-full antialiased">
      <body className="min-h-full bg-[#030303] text-[#F4F0E8] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
