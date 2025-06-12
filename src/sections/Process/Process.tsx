'use client';
import { useRef } from 'react';
import { ContentContainer, DecorativeLines, SectionTag } from '@/components';
import styles from './Process.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const text1 = textRef1.current;
    const text2 = textRef2.current;
    const text3 = textRef3.current;

    if (!container || !text1 || !text2 || !text3) return;

    gsap.set([text1, text2, text3], { opacity: 0 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <DecorativeLines count={2} darkSection />
      <ContentContainer>
        <SectionTag text="Process" darkSection />
        <h3 className={styles.sectionTitle}>Simple steps</h3>

        <div ref={textRef1} className={styles.stepText}>
          <h2>01</h2>
          <p>
            We’ll start with a quick call to understand your business, goals,
            and challenges — so the solution fits exactly what you need.
          </p>
        </div>

        <div ref={textRef2} className={styles.stepText}>
          <h2>02</h2>
          <p>
            You’ll get a clear plan with scope, price, and timeline tailored to
            your stage.
          </p>
        </div>

        <div ref={textRef3} className={styles.stepText}>
          <h2>03</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
            laudantium?
          </p>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Process;
