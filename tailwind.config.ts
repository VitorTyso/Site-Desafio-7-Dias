import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#fbfbfd",
        ink: "#111111",
        mist: "#6e6e73",
        line: "rgba(17, 17, 17, 0.06)",
        accent: "#b6c0cc",
        accentSoft: "#eef2f6",
        slateSoft: "#7d8793"
      },
      boxShadow: {
        panel: "0 30px 80px rgba(17, 17, 17, 0.05)",
        float: "0 14px 40px rgba(17, 17, 17, 0.05)",
        device: "0 28px 60px rgba(17, 17, 17, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
