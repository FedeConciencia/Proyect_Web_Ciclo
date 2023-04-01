import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "Poner Title",
  description = "Poner Descripcion",
}: Props) => {

  const { asPath } = useRouter();
  const canonicalURL = ` ${
    typeof window !== "undefined" ? window.location.origin : "localhost:3000"
  }​​​​​​${asPath}​​​​​​`;

  return (
    <>
      <Head>
        <title>{title}​​​​​​</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="description" content={description} />{" "}
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`${canonicalURL}​​​​​​`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {children}​​​​​​ {/* Aca se re renderiza el componente hijo */}
      <Footer/>
    </>
  );
};

export default Layout;
