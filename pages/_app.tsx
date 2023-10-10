import "../styles/globals.sass";
import type { AppProps } from "next/app";
import Layout from "./components/layout/layout";
import { OrderContextProvider } from "../contexts/orderContext";
import { AuthProvider } from "../contexts/authContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <OrderContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OrderContextProvider>
    </AuthProvider>
  );
}
