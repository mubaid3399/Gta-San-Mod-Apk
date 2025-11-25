import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "GTA San Apk - Premium Mods & Enhancements",
  description: "Explore amazing mods and enhancements for GTA San Andreas",
  icons: {
    icon: "/gta-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
