'use client'
import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href="/" aria-label="Dogs - Home">
          <Image src={logo} alt="Logo" width={28} height={22} priority />
        </Link>
        {data ? (
          <Link className={styles.login} href="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={styles.login} href="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
