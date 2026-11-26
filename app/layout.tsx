import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Farm Co. — Get closer to where food begins",
  description: "Discover real farms, book hands-on experiences and reconnect with nature.",
  manifest: "/manifest.json",
  themeColor: "#173f2c"
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}