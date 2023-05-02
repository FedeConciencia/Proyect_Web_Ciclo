import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  servicios?: boolean;
};

const Layout = ({
  children,
  title = "Ciclo",
  description = "Soluciones Creativas",
  servicios = true,
}: Props) => {
  const { asPath } = useRouter();
  const canonicalURL = ` ${
    typeof window !== "undefined" ? window.location.origin : "localhost:3000"
  }${asPath}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`${canonicalURL}​​​​​​`} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <Header />
      {children}
      <Footer servicios={servicios} />
    </>
  );
};

export default Layout;
