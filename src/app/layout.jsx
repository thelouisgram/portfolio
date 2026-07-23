import "./globals.css";

export const metadata = {
  title: "thelouisgram — Adeyeye Adesanoye",
  description:
    "Frontend engineer and MD building production-grade web products. Open to remote, onsite, and contract roles.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
      "https://thelouisgram.vercel.app",
  ),
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
