import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { poppinFonts, ebGaramond } from "./fonts/custom-fonts";
import { ThemeProvider } from "./providers/theme-provider";
import SmoothScrollProvider from "./providers/smooth-scroll";

import "./globals.css";
import { Toaster } from "sonner";

const VisualEditing = dynamic(() =>
  import("next-sanity").then((mob) => mob.VisualEditing)
);

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
        className={`${poppinFonts.variable} ${ebGaramond.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
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
          <Toaster />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
