import "../styles/globals.css";
import "../styles/mediaQueries.css";
import "../styles/colors.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const Cursor = dynamic(() => import("components/molecules/cursor/cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}

export default MyApp;
