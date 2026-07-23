import "./globals.css";

const FALLBACK_SITE_URL = "https://thelouisgram.vercel.app";

function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (!raw) return FALLBACK_SITE_URL;

  try {
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    return new URL(withProtocol).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const metadata = {
  title: "thelouisgram — Adeyeye Adesanoye",
  description:
    "Frontend engineer and MD building production-grade web products. Open to remote, onsite, and contract roles.",
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    title: "thelouisgram — Adeyeye Adesanoye",
    description:
      "Frontend engineer and MD building production-grade web products.",
    url: "/",
    siteName: "thelouisgram",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
