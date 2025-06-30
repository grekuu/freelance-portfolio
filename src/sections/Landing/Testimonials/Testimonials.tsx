'use client';
import {
  BlurRevealText,
  ContentContainer,
  DecorativeLines,
  SectionTag,
} from '@/components';
import styles from './Testimonials.module.scss';
import Link from 'next/link';
import { useCursor } from '@/providers/CursorProvider';

const Testimonials = () => {
  const { setIsHovering, setCursorText } = useCursor();
  return (
    <section className={styles.container} id="testimonials">
      <DecorativeLines count={2} darkSection />
      <ContentContainer customClassName={styles.contentContainer}>
        <SectionTag text="Client Approval" darkSection />
        <BlurRevealText
          text='"Gracjan is just 10/10. Hes such a pleasure to work with and is so patient and kind. Hes taken my website to a whole new level! Unbelievably grateful! Work with Gracjan, you wont regret it."'
          className={styles.testimonial}
        />
        <div className={styles.personInfo}>
          <p>Lena Prusik</p>
          <p>Personal Trainer</p>
        </div>
        <Link
          href=""
          className={styles.readMoreBtn}
          onMouseEnter={() => {
            setCursorText('READ');
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          +Read more Testimonials
        </Link>
      </ContentContainer>
    </section>
  );
};

export default Testimonials;
