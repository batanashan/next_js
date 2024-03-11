'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Menu from "@/components/Menu";
import { Footer } from "@/components/Footer";
import 'bootstrap/dist/css/bootstrap.css'
const inter = Inter({ subsets: ["latin"] });



export default function App({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
<Header/>
<Menu/>
        {children}
       <Footer/> 
        
        </body>
    </html>
  );
}
