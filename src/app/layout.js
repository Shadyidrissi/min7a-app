import { Inter } from "next/font/google";
import "./globals.css";
import NavbarX from "../components/NavbarX"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "منح دراسية وعقود عمل",
  description: "منح دراسية وعقود عمل في جميع أنحاء العالم ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <NavbarX/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
