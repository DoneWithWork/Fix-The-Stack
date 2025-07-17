"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

export default function PageLoader() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if (prevPath.current !== null && prevPath.current !== pathname) {
      NProgress.start();
    }

    const timer = setTimeout(() => {
      NProgress.done();
      prevPath.current = pathname;
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
