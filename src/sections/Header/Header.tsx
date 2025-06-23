'use client';
import Link from 'next/link';
import styles from './Header.module.scss';
import Image from 'next/image';
import { burgerMenu, contactPhone, logo, pfp } from '../../../public';

const Header = () => {
  return (
    <header className={styles.header} data-aos="fade">
      <button
        className={styles.burgerMenu}
        onClick={() => console.log('Open menu')}
      >
        <Image src={burgerMenu} alt="Menu" />
      </button>
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
      </div>
      <Link href={'/'}>
        <Image src={logo} alt="Logo" />
      </Link>

      <Link href="#contact" className={styles.contactBtn}>
        <Image src={pfp} alt="Gracjan Prusik" />
        Contact us
      </Link>
      <Link href="#contact" className={styles.contactIcon}>
        <Image src={contactPhone} alt="Contact Icon" />
      </Link>
    </header>
  );
};

export default Header;
