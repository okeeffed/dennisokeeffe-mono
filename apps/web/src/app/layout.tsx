import "@/styles/global.css";
import cx from "clsx";
import { rubik, robotoMono } from "@/utils/font";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className={cx(rubik.variable, robotoMono.variable)} lang="en">
      <body>{children}</body>
    </html>
  );
}
