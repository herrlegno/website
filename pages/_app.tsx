import "../styles/globals.css";
import "../styles/mediaQueries.css";
import "../styles/colors.css";
import type { AppProps } from "next/app";
import Cursor from "components/molecules/cursor/cursor";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}

export default MyApp;
