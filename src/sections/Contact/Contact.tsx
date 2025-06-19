import { ContentContainer, SectionTag } from '@/components';
import styles from './Contact.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { southEastArrow } from '../../../public';

const Contact = () => {
  return (
    <section className={styles.container}>
      <ContentContainer customClassName={styles.contentContainer}>
        <SectionTag text="Contact" darkSection />
        <div className={styles.bothSections}>
          <div className={styles.sectionLeft}>
            <h2 className={styles.sectionTitle}>Let&apos;s collaborate!</h2>
            <Link href="#" className={styles.callLink}>
              BOOK A CALL
              <Image
                src={southEastArrow}
                alt="South East Arrow"
                className={styles.southEastArrow}
              />
            </Link>
          </div>

          <div className={styles.sectionRight}></div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Contact;
