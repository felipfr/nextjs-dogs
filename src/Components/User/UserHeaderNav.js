import AdicionarFoto from '../../Assets/adicionar.svg';
import Estatisticas from '../../Assets/estatisticas.svg';
import Link from "next/link";
import MinhasFotos from '../../Assets/feed.svg';
import React from "react";
import Sair from '../../Assets/sair.svg';
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";
import { UserContext } from "../../UserContext";
import { usePathname } from "next/navigation";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <Link href="/conta" className={pathname == "/conta" ? "active" : ""}>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link
          href="/conta/estatisticas"
          className={pathname == "/conta/estatisticas" ? "active" : ""}
        >
          <Estatisticas />
          {mobile && "Estatísticas"}
        </Link>
        <Link
          href="/conta/postar"
          className={pathname == "/conta/postar" ? "active" : ""}
        >
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
