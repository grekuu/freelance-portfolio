import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { logo, pfp } from '../../../public';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <Link href="#works" className={styles.link}>
          Works
        </Link>
        <Link href="#testimonials" className={styles.link}>
          Testimonials
        </Link>
        <Link href="#services" className={styles.link}>
          Services
        </Link>
        <Link href="#about" className={styles.link}>
          About
        </Link>
      </div>
      <Link href={'/'}>
        <Image src={logo} alt="logo" />
      </Link>

      <Link href="#contact" className={styles.contactBtn}>
        <Image src={pfp} alt="Gracjan Prusik" />
        Contact us
      </Link>
    </header>
  );
};

export default Header;
