/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077E6",
          50: "#CCE9FF",
          100: "#ADDBFF",
          200: "#7CC2FF",
          300: "#4AA9FF",
          400: "#1A91FF",
          500: "#0077E6",
          600: "#005DB4",
          700: "#004282",
          800: "#002851",
          900: "#011838",
          950: "#000711",
        },
        secondary: {
          DEFAULT: "#5F5F5F",
          50: "#F3F3F3",
          100: "#E9E9E9",
          200: "#DADADA",
          300: "#B0B0B0",
          400: "#737373",
          500: "#5F5F5F",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0C0C0C",
        },
        info: {
          DEFAULT: "#0ea5e9",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        success: {
          DEFAULT: "#348352",
          50: "#CAFFE8",
          100: "#A2F1C0",
          200: "#84D3A2",
          300: "#66B584",
          400: "#489766",
          500: "#348352",
          600: "#2A7948",
          700: "#206F3E",
          800: "#166534",
          900: "#14532D",
          950: "#071F11",
        },
        warning: {
          DEFAULT: "#f97316",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        destructive: {
          DEFAULT: "#E63535",
          50: "#FEE2E2",
          100: "#FECACA",
          200: "#FCA5A5",
          300: "#F87171",
          400: "#EF4444",
          500: "#E63535",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#7F1D1D",
          900: "#991B1B",
          950: "#220808",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }: any) => {
      addUtilities({
        ".text": "text-gray-900 dark:text-gray-100",
        ".placeholder-text": "text-gray-500 dark:text-gray-500",
        ".view": "bg-slate-100 dark:bg-slate-900",
        ".header": "bg-slate-50 dark:bg-slate-800",
				".header-text": "",
        ".card": "bg-slate-50 dark:bg-slate-800",
        ".input":
          "px-2 rounded-md border-2 border-gray-200 dark:border-slate-500",
        ".vstack": "flex flex-col flex-1",
        ".hstack": "flex flex-row flex-1",
      });
    }),
  ],
};
