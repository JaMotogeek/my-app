"use client";

import Head from "next/head";
import SignIn from "./components/Login";
import Message from "./components/Messaging";

export default function login() {
  return (
    <>
      <Head>
        <title>Login - lightning Jobs</title>
        <meta name="description" content="Log in to your DEAL account" />
      </Head>
      <SignIn />
      <Message />
    </>
  );
}