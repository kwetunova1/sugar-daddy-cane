// import { Inter } from "next/font/google";
import { Bangers } from '@next/font/google';
import "./globals.css";

const bangers = Bangers({
  weight: ['400'],
  subsets: ['latin'],
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sugar Daddy Cane",
  description: "Sugar cane juice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bangers.className}>
        {children}
        </body>
    </html>
  );
}
