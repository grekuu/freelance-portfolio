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
        <h2
          className={styles.sectionTitle}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Here’s what we’ve been building
        </h2>
        <p
          className={styles.sectionSubtitle}
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
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
