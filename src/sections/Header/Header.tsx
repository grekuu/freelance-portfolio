import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentContainer}>
        <div className={styles.linksContainer}>
          <Link href="#works">Works</Link>
          <Link href="#testimonials">Testimonials</Link>
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
        </div>
        <Link className={styles.headerLogo} href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={562}
            height={239}
            className={styles.logo}
          />
        </Link>
        <Link className={styles.contactBtn} href="#contact">
          <Image
            src="/profilePic.webp"
            width={32}
            height={32}
            alt="Contact Me Profilr Picture"
            className={styles.profilePic}
          />
          Contact me
        </Link>
      </div>
    </header>
  );
};

export default Header;
