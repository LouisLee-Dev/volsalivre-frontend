import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom': '0 4px 10px rgba(0, 0, 0, 0.1), 0 -4px 10px rgba(0, 0, 0, 0.1), -4px 0 10px rgba(0, 0, 0, 0.1), 4px 0 10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
