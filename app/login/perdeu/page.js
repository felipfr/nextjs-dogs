import LoginPasswordLost from "@/src/Components/Login/LoginPasswordLost";
import styles from "../Login.module.css";

export const metadata = {
  title: "Perdeu a Senha",
};

export default function Home() {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <LoginPasswordLost />
      </div>
    </section>
  );
}
