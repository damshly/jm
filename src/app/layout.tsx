// src/app/layout.tsx
"use client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { theme } from "@/lib/theme";
import Navbar from "@/components/Navbar";

if (typeof window === 'undefined') {
  (global as any).localStorage = {
    getItem: (key: string) => {
      console.trace(`[FIX-DEBUG] localStorage.getItem was called for key: "${key}"`);
      return null;
    },
    setItem: () => { },
    removeItem: () => { },
    clear: () => { },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" >
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
