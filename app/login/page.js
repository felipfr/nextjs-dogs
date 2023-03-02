import LoginVerify from "@/src/Components/Login/LoginVerify";
import React from "react";
import styles from "./Login.module.css";

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <>
      <section className={styles.login}>
        <div className={styles.forms}>
          <LoginVerify />
        </div>
      </section>
    </>
  );
}
