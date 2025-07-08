"use client";

import { CookiesProvider } from "react-cookie";
import { ReactNode } from "react";

export default function CookieLayout({ children }: { children: ReactNode }) {
  return <CookiesProvider>{children}</CookiesProvider>;
}
