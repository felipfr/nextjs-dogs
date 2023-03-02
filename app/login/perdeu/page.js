import LoginPasswordLost from "../../../src/Components/Login/LoginPasswordLost";
import styles from "../Login.module.css";

export default function Perdeu() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LoginPasswordLost />
      </div>
    </section>
  );
}
