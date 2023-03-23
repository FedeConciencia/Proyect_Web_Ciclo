import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

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
    <div>
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
      <header>
        <nav>
          <Link href="/">Home</Link> |<Link href="/about">About</Link> |{" "}
          <Link href="/"> Nuestra Propuesta</Link> |{" "}
          <Link href="/"> Nostros </Link> | <Link href="/"> Obras</Link> |{" "}
          <Link href="/"> Contacto</Link> |{" "}
        </nav>
      </header>
      {children}​​​​​​ {/* Aca se re renderiza el componente hijo */}
      <footer>
        {" "}
        <hr /> <span>I'm here to stay (Footer)</span>{" "}
      </footer>
    </div>
  );
};

export default Layout;
