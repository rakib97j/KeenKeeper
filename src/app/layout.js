import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import ToastProvider from "@/components/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard",
  description: "This is the application Dashboard",
};

export default function RootLayout({ children }) {
    
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        
        <div className="bg-[#FFFFFF] border-b border-gray-100 shadow-sm">
          <NavBar></NavBar>
        </div>
        {children}

        <div className=" bg-[#244D3F]">
          <Footer></Footer>
          
        </div>
        <ToastProvider />
      </body>
    </html>
  );
}
