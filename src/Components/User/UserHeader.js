'use client'
import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
import { usePathname } from 'next/navigation';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const router = usePathname();

  React.useEffect(() => {
    const pathname = router;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste Sua Foto');
        break;
      case '/conta/estatisticas':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [router]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
