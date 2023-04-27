import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container:{
      center: true
    }
  },
  plugins: [],
} satisfies Config;
