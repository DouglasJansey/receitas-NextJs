import { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

type component ={
  children: ReactNode
}

export default function Layout({ children }: component) {
  return (
    <>
      <Header />
      <main>{ children }</main>
      <Footer />
    </>
  );
};
