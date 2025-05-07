import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.headerLogo} href="/">
        <Image
          src="/logo.webp"
          alt="logo"
          width={562}
          height={239}
          className={styles.logo}
        />
      </Link>
      <div className={styles.linksContainer}></div>
      <div className={styles.contactBtn}></div>
    </header>
  );
};

export default Header;
