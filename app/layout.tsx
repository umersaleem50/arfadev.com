import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { draftMode } from "next/headers";
import { ebGaramond, poppinFonts } from "./fonts/custom-fonts";
import SmoothScrollProvider from "./providers/smooth-scroll";
import { ThemeProvider } from "./providers/theme-provider";

import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const VisualEditing = dynamic(() =>
  import("next-sanity").then((mob) => mob.VisualEditing),
);

export const metadata: Metadata = {
  title: {
    template: "%s - Arfa Developers",
    default: "Keep your vision alive and online - Arfa Developers",
  },
  description:
    "We develop full-stack and frontends for web applications that stay online when you need the most.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        src='https://cloud.umami.is/script.js" data-website-id="904087dd-466a-4c7c-948c-1645837484e5'
      />
      <body
        className={`${poppinFonts.variable} ${ebGaramond.variable} antialiased  bg-background text-foreground`}
      >
        <SmoothScrollProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // disableTransitionOnChange
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
