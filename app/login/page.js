"use client";
import LoginForm from "@/src/Components/Login/LoginForm.js";
import React from "react";
import styles from "./Login.module.css";
import { UserContext } from "@/src/UserContext";
import { useRouter } from "next/navigation";
import Head from "next/head";

export const metadata = {
  title: "Login",
};

export default function Home() {
  const { login } = React.useContext(UserContext);
  const router = useRouter();

  if (login === true) return router.push("/conta");

  return (
    <>
    <Head>
      <title>Login</title>
    </Head>
      <section className={styles.login}>
        <div className={styles.forms}>
          <LoginForm />
        </div>
      </section>
    </>
  );
}
