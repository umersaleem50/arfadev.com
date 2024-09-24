import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        card: "max-w-[30rem]",
        container: "max-w-[85rem]",
      },
      colors: {
        // background: "hsl(var(--background))",
        // foreground: "hsl(var(--foreground))",
        "brand-black": "var(--brand-black)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontFamily: {
      sans: ["var(--font-poppins)", "san-serif"],
      serif: ["var(--font-serif)", "serif"],
    },

    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },

  safelist: [
    {
      pattern: /grid-cols-/,
      variants: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      pattern: /col-span-/,
      variants: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      pattern: /col-start-/,
      variants: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      pattern: /justify-self-/,
      variants: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      pattern: /self-/,
      variants: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      pattern: /max-w-/,
    },
    {
      pattern: /bg-/,
    },
    {
      pattern: /text-/,
    },
  ],
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
