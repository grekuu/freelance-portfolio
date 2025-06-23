import { ContentContainer, DecorativeLines, SectionTag } from '@/components';
import styles from './Works.module.scss';
import { WorkItem } from './components';
import { worksData } from '@/data';

const Works = () => {
  return (
    <section className={styles.container} id="works">
      <DecorativeLines count={2} />
      <ContentContainer>
        <SectionTag text="Our Works" />
        <h2 className={styles.sectionTitle}>Here’s what we’ve been building</h2>
        <p className={styles.sectionSubtitle}>
          Websites tailored to each client’s needs — fast, clean, and
          functional.
        </p>

        <div className={styles.worksGrid}>
          {worksData.map((work, index) => (
            <WorkItem
              key={index}
              image={work.image}
              companyName={work.companyName}
              service={work.service}
            />
          ))}
        </div>
      </ContentContainer>
    </section>
  );
};

export default Works;
