import styles from "../Login.module.css";
import LoginPasswordReset from "@/src/Components/Login/LoginPasswordReset";

export default function Resetar() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LoginPasswordReset />
      </div>
    </section>
  );
}
