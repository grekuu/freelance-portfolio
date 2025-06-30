import { ContentContainer } from '@/components';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ContentContainer customClassName={styles.contentContainer}>
        <div className={styles.itemsContainer}>
          <p className={styles.footerText}>© PRUSK</p>
          <Link href="/privacy-policy" className={styles.footerText}>
            Privacy Policy
          </Link>
        </div>
      </ContentContainer>
    </footer>
  );
};

export default Footer;
