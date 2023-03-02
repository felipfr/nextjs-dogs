import AdicionarFoto from "../../Assets/adicionar.svg";
import Estatisticas from "../../Assets/estatisticas.svg";
import Image from "next/image";
import Link from "next/link";
import MinhasFotos from "../../Assets/feed.svg";
import React from "react";
import Sair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";
import { UserContext } from "../../UserContext";
import { useRouter } from "next/navigation";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const router = useRouter();

  const { pathname } = router;
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
        <Link href="/conta" end>
          <Image
            src={MinhasFotos}
            alt="Minhas Fotos"
            width={20}
            height={20}
            priority
          />
          {mobile && "Minhas Fotos"}
        </Link>
        <Link href="/conta/estatisticas">
          <Image
            src={Estatisticas}
            alt="Estatísticas"
            width={20}
            height={20}
            priority
          />
          {mobile && "Estatísticas"}
        </Link>
        <Link href="/conta/postar">
          <Image
            src={AdicionarFoto}
            alt="Adicionar Foto"
            width={20}
            height={20}
            priority
          />
          {mobile && "Adicionar Foto"}
        </Link>
        <button onClick={userLogout}>
          <Image src={Sair} alt="Sair" width={20} height={20} priority />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
