import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "GTA San Andreas MOD APK 2025 - Unlimited Money & Features Unlocked",
  description: "Download GTA San Andreas MOD APK with unlimited money, all features unlocked, enhanced graphics and mods. Free Android APK for GTA San Andreas MOD.",
  keywords: "GTA San Andreas APK, GTA San Andreas MOD APK, GTA San Andreas Unlimited Money, GTA San Andreas Free Download, GTA San Andreas Mods",
  icons: {
    icon: "/gta-logo.jpg",
    apple: "/gta-logo.jpg",
  },
  manifest: "/manifest.json",
  themeColor: "#00ff87",
  applicationName: "GTA San Apk",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "GTA San Apk",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gtasanandreas.info",
    siteName: "GTA San Apk",
    title: "GTA San Andreas MOD APK 2025 - Unlimited Money & Features",
    description: "Download GTA San Andreas MOD APK with unlimited money, all features unlocked. Play the best GTA San Andreas mods for Android.",
    images: [
      {
        url: "https://gtasanandreas.info/heroimage2.png",
        width: 1200,
        height: 630,
        alt: "GTA San Andreas MOD APK 2025 Hero Banner",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GTA San Andreas MOD APK 2025 - Unlimited Money & Features",
    description: "Download GTA San Andreas MOD APK with unlimited money and all features unlocked for Android devices.",
    images: ["https://gtasanandreas.info/heroimage2.png"],
    creator: "@GTASanApk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://gtasanandreas.info",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
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
