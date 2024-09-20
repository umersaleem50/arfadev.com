import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { poppinFonts } from "./fonts/custom-fonts";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";

const VisualEditing = dynamic(() =>
  import("next-sanity").then((mob) => mob.VisualEditing)
);

const EbFont = EB_Garamond({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Arfa Developers",
    default: "Arfa Developers",
  },
  description: "Empowering Law Firms Through Smart Branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinFonts.variable} ${EbFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {draftMode().isEnabled && (
            <a
              className="fixed right-0 bottom-0 bg-blue-500 text-white p-4 m-4"
              href="/api/draft-mode/disable"
            >
              Disable preview mode
            </a>
          )}
          {children}
          {draftMode().isEnabled && <VisualEditing />}
        </ThemeProvider>
      </body>
    </html>
  );
}
