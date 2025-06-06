import { ContentContainer, DecorativeLines, SectionTag } from '@/components';
import styles from './Services.module.scss';

const Services = () => {
  return (
    <section className={styles.container} id="#services">
      <DecorativeLines count={2} />
      <ContentContainer>
        <SectionTag text="Services" />
        <h2 className={styles.sectionTitle}>Solutions for You</h2>
        <p className={styles.sectionSubtitle}>
          Flexible packages tailored to your goals. Whether you need a simple
          site or a custom solution, we’ve got you covered.
        </p>
      </ContentContainer>
    </section>
  );
};

export default Services;
