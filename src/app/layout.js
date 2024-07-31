import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";

import AuthProvider from "@/services/AuthProvider";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Best Event",
    template: "%s | Best Event",
  },
  description: "Best Event Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme" className="bg-slate-100">
      <body className={inter.className}>
        <Suspense>
          <ToastContainer />
          <AuthProvider>
            <Navbar />
            {children}
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
