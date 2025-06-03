import { ContentContainer, DecorativeLines, SectionTag } from '@/components';
import styles from './Testimonials.module.scss';
import Link from 'next/link';

const Testimonials = () => {
  return (
    <section className={styles.container}>
      <DecorativeLines count={2} darkSection />
      <ContentContainer customClassName={styles.contentContainer}>
        <SectionTag text="Client Approval" darkSection />
        <h2 className={styles.testimonial}>
          “Gracjan is just 10/10. He’s such a pleasure it work with and is so
          patient and kind. He’s taken my website to a whole new level!
          Unbelievably grateful! Work with Gracjan, you won’t regret it.”
        </h2>
        <div className={styles.personInfo}>
          <p>Lena Prusik</p>
          <p>Personal Trainer</p>
        </div>
        <Link href="" className={styles.readMoreBtn}>
          +Read more Testimonials
        </Link>
      </ContentContainer>
    </section>
  );
};

export default Testimonials;
