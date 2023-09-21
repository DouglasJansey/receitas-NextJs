import "../styles/globals.sass";
import type { AppProps } from "next/app";
import Layout from "./components/layout/layout";
import { OrderContextProvider } from "../contexts/orderContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrderContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </OrderContextProvider>
  );
}
