import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "top-bar": "0px 7px 24px rgba(0,0,0,0.1)",
      },
      backgroundImage: {
        "cover-title-gradient":
          "linear-gradient(90.2deg, #0B414B 0.17%, rgba(11, 65, 75, 0.75) 71.98%, #E6FF2A 137.79%)",
        "cover-item-border-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.3) 100%)",
        "cover-item-fill-gradient":
          "linear-gradient(180deg, rgba(248, 247, 242, 0.6) 0%, rgba(248, 247, 242, 0.42) 100%)",
        "intro-fill-gradient":
          "linear-gradient(92deg, rgba(177, 192, 192, 0.3) 0%, rgba(248, 247, 242, 0.5) 101.56%)",
        "intro-fill-gradient-sm":
          "linear-gradient(92deg, rgba(177, 192, 192, 0.8) 0%, rgba(248, 247, 242, 1) 101.56%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        black: "var(--black)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
