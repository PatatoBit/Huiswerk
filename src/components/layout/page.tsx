import Head from "next/head";
import React from "react";
import Nav from "../Nav";

function Layout({
  children,
  title,
}: {
  children: JSX.Element;
  title?: string;
}) {
  const t = `${title} - Huiswerk`;

  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}

      <Nav />
      <main className="flex min-h-screen w-full flex-col items-center justify-center">
        {children}
      </main>
    </>
  );
}

export default Layout;
