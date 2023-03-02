import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
