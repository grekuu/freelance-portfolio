import { ContentContainer, DecorativeLines, SectionTag } from '@/components';
import styles from './Process.module.scss';

const Process = () => {
  return (
    <section className={styles.container}>
      <DecorativeLines count={2} darkSection />
      <ContentContainer>
        <SectionTag text="Process" darkSection />
        <h3 className={styles.sectionTitle}>Simple steps</h3>
      </ContentContainer>
    </section>
  );
};

export default Process;
