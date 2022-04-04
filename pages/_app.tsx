import SEO from "components/organisms/seo/seo";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";
import "styles/colors.css";
import "styles/globals.css";
import "styles/mediaQueries.css";

const Cursor = dynamic(() => import("components/molecules/cursor/cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
      </Head>
      <SEO />
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}

export default MyApp;
