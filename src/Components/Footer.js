import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../Assets/dogs-footer.svg";
import vercel from "../Assets/powered-by-vercel.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={28} height={22} priority />
      </div>
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
