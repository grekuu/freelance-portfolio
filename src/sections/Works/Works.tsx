import { ContentContainer, DecorativeLines, SectionTag } from '@/components';
import styles from './Works.module.scss';
import Image from 'next/image';
import { projectImage } from '../../../public';

const Works = () => {
  return (
    <section className={styles.container} id="#works">
      <DecorativeLines count={2} />
      <ContentContainer>
        <SectionTag text="Our Works" />
        <h2 className={styles.sectionTitle}>Here’s what we’ve been building</h2>
        <p className={styles.sectionSubtitle}>
          Websites tailored to each client’s needs — fast, clean, and
          functional.
        </p>

        <div className={styles.worksGrid}>
          <div className={styles.workItem}>
            <div className={styles.imageContainer}>
              <Image src={projectImage} alt="LPP" />
            </div>
            <div className={styles.workInfo}>
              <span>LPP</span>
              <span>DESIGN & DEVELOPMENT</span>
            </div>
          </div>
          <div className={styles.workItem}>
            <div className={styles.imageContainer}>
              <Image src={projectImage} alt="LPP" />
            </div>
            <div className={styles.workInfo}>
              <span>LPP</span>
              <span>DESIGN & DEVELOPMENT</span>
            </div>
          </div>
          <div className={styles.workItem}>
            <div className={styles.imageContainer}>
              <Image src={projectImage} alt="LPP" />
            </div>
            <div className={styles.workInfo}>
              <span>LPP</span>
              <span>DESIGN & DEVELOPMENT</span>
            </div>
          </div>
          <div className={styles.workItem}>
            <div className={styles.imageContainer}>
              <Image src={projectImage} alt="LPP" />
            </div>
            <div className={styles.workInfo}>
              <span>LPP</span>
              <span>DESIGN & DEVELOPMENT</span>
            </div>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Works;
