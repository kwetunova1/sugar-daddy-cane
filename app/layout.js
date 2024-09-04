// import { Inter } from "next/font/google";
import { Rubik } from '@next/font/google';
import "./globals.css";

const usedFont = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sugar Daddy Cane",
  description: "Sugar cane juice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={usedFont.className}>
        {children}
        </body>
    </html>
  );
}
