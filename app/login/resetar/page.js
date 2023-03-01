import styles from "../Login.module.css";
import LoginPasswordReset from "@/src/Components/Login/LoginPasswordReset";

export const metadata = {
  title: "Resete a Senha",
};

export default function Home() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LoginPasswordReset />
      </div>
    </section>
  );
}
