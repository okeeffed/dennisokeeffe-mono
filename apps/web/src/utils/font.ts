import { Rubik, Roboto_Mono as RobotoMono } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const robotoMono = RobotoMono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});
