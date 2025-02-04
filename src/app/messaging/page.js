"use client";

import Head from "next/head";

export default function message() {
  return (
    <>
      <Head>
        <title>Messaging - Lightning Jobs</title>
        <meta name="description" content="Message your AI" />
      </Head>
      <SignIn />
    </>
  );
}