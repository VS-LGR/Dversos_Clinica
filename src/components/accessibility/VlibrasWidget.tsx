"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => unknown;
    };
    __vlibrasWidgetLoaded?: boolean;
  }
}

function initVlibras() {
  if (typeof window === "undefined") return;
  if (window.__vlibrasWidgetLoaded) return;
  if (!window.VLibras?.Widget) return;
  try {
    // As per official documentation: https://vlibras.gov.br/doc/widget/installation/webpageintegration.html
    // eslint-disable-next-line no-new
    new window.VLibras.Widget("https://vlibras.gov.br/app");
    window.__vlibrasWidgetLoaded = true;
  } catch {
    // If it fails, allow retry on next navigation/load.
    window.__vlibrasWidgetLoaded = false;
  }
}

export default function VlibrasWidget() {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

  useEffect(() => {
    if (isAdminRoute) return;
    initVlibras();
  }, [isAdminRoute]);

  // Public only (exclude /admin).
  if (isAdminRoute) return null;

  return (
    <>
      <div vw="" className="enabled">
        <div vw-access-button="" className="active" />
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="afterInteractive"
        onLoad={initVlibras}
      />
    </>
  );
}

