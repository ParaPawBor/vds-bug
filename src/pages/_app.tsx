import "@vds/components/dist/resets.css";
import "@/styles/globals.css";
import { ThemeWrapper } from "@vds/components";


import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper theme="dark">
      <Component {...pageProps} />
    </ThemeWrapper>
  );
}
