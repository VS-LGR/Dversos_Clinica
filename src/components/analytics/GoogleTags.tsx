"use client";

import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export default function GoogleTags() {
  if (!GA_ID && !ADS_ID) return null;

  const ids = [GA_ID, ADS_ID].filter(Boolean) as string[];
  const firstId = ids[0];

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${firstId}`}
        strategy="afterInteractive"
      />
      <Script id="google-tags-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          ${ids.map((id) => `gtag('config', '${id}', { anonymize_ip: true });`).join("\n")}
        `}
      </Script>
    </>
  );
}
