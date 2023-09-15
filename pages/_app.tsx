import "../styles/globals.sass";
import type { AppProps } from "next/app";
import Layout from "./components/layout/layout";
import { AuthProvider } from "./contexts/authContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
