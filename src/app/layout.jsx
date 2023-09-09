import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hooks Notes",
  description: "Personal Hooks Notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen w-screen bg-slate-950 text-white flex flex-col justify-between px-5 md:px-20 lg:px-40">
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
