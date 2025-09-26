import type { Metadata } from "next";
import { Encode_Sans_Condensed } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const encodeSansCondensed = Encode_Sans_Condensed({
  subsets: ["latin"],
  variable: "--font-encode-sans-condensed",
  weight: ["300", "400", "700"],
});

const hussarBold = localFont({
  src: "./fonts/HussarBoldWeb.otf",
  variable: "--font-hussar-bold",
  weight: "700", 
  style: "normal",
});

const basePath = process.env.NODE_ENV === 'production' ? '/bitclubvt.org' : '';

export const metadata: Metadata = {
  title: {
    default: "BIT Club @ VT",
    template: "%s | BIT Club @ VT",
  },
  description:
    "Welcome to the BIT Club Website! You can find out more about our club, view our executive board members, and check our calendar for upcoming events!",
  icons: {
    icon: `/bitclub_icon.ico`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${encodeSansCondensed.variable} ${hussarBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}