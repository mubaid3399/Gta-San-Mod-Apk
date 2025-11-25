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

export default async function RootLayout({ children, params }) {
  let locale = 'en';

  // Get locale from params if available
  if (params) {
    try {
      const resolvedParams = await params;
      locale = resolvedParams.locale || 'en';
    } catch (error) {
      // Fallback to 'en' if params cannot be resolved
      locale = 'en';
    }
  }

  return (
    <html className="dark" lang={locale} suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
