// app/layout.js
import "@styles/global.css";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
import { Provider } from "@components/ui/provider";
import { Poppins, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Nethub | Growth, Inspiration and Innovation",
  description:
    "Nethub is your reliable partner in digital solutions. From website creation to SEO services, we help your business dominate the digital landscape.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${poppins.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Nethub" />
        <meta
          name="keywords"
          content="Nethub, digital solutions, website creation, SEO, digital shelves"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/images/logo-v3.svg" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/images/logo-v3.svg" />
        <meta property="og:url" content="https://nethub.co.ke" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/images/logo-v3.svg" />
        {/* google search console */}
        <meta
          name="google-site-verification"
          content="AMulxsw3InJpd-SJcJqJeD-wAslH5SnYaB4jK0XHGIE"
        />
        {/* ahrefs */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="QTNpI2DJ/rFJEOttW/YrUw"
          defer={true}
        ></script>
      </head>
      <body className="bg-background text-darkGray">
        <Provider>
          <div className="sticky top-0 z-50  w-full bg-white shadow-sm">
            <NavBar />
          </div>
          <main className="min-h-screen w-full mx-auto">
            {children}
            <Analytics />
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
