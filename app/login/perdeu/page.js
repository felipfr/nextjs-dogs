import LoginPasswordLost from "../../../src/Components/Login/LoginPasswordLost";
import styles from "../Login.module.css";

export const metadata = {
  title: 'Perdeu a senha',
};

export default function Perdeu() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LoginPasswordLost />
      </div>
    </section>
  );
}
