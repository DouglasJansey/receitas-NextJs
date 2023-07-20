import "../styles/globals.sass";
import type { AppProps } from "next/app";
import Layout from "./components/layout/layout";
import { AuthProvider } from "./contexts/authContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Layout>
  );
}
