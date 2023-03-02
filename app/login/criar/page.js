import styles from "../Login.module.css";
import LoginCreate from "../../src/Components/Login/LoginCreate";

export default function Criar() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LoginCreate />
      </div>
    </section>
  );
}
