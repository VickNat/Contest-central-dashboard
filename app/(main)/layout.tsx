"use client";
import React from "react";
import { Inter } from "next/font/google";

import MainLayout from "../_components/MainLayout/MainLayout";
import { Provider } from "react-redux";
import { store } from "@/lib/store";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-black`}>
        <Provider store={store}>
          <MainLayout>{children}</MainLayout>
        </Provider>
      </body>
    </html>
  );
}
