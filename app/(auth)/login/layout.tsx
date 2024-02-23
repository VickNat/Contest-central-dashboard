import React from 'react';
import { ReactNode } from 'react';
import '../../globals.css'
interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (
      <html>
        <body>
          <>
            <main>{children}</main>
          </>
        </body>
      </html>
    )
  }
