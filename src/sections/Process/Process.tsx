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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    const text1 = textRef1.current;
    const text2 = textRef2.current;
    const text3 = textRef3.current;

    if (!container || !text1 || !text2 || !text3 || !heading) return;

    gsap.set([text1, text2, text3], { opacity: 0 });
    gsap.set(heading, { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=2500',
        pin: true,
        scrub: 0.5,
      },
    });

    tl.to(heading, { opacity: 0, duration: 0.1 }, 0)
      .to(text1, { opacity: 1, duration: 0.1 }, 0.1)
      .to(text1, { opacity: 0, duration: 0.1 }, 0.23)
      .to(text2, { opacity: 1, duration: 0.1 }, 0.33)
      .to(text2, { opacity: 0, duration: 0.1 }, 0.56)
      .to(text3, { opacity: 1, duration: 0.1 }, 0.66)
      .to(text3, { opacity: 0, duration: 0.1 }, 0.9);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.container}>
      <DecorativeLines count={2} darkSection />
      <ContentContainer>
        <SectionTag text="Process" darkSection />
        <h3 className={styles.sectionTitle} ref={headingRef}>
          Simple steps
        </h3>

        <div ref={textRef1} className={styles.stepText}>
          <span>Kickoff & Discovery</span>
          <p>
            We’ll start with a short kickoff call or form to understand your
            business, goals, and preferences. This helps align scope, structure,
            and visuals with your needs.
          </p>
        </div>

        <div ref={textRef2} className={styles.stepText}>
          <span>Plan & Design</span>
          <p>
            Based on our discovery, you’ll receive a tailored plan — including
            site structure, features, and timeline. For custom work, we’ll move
            into design drafts and feedback rounds.
          </p>
        </div>

        <div ref={textRef3} className={styles.stepText}>
          <span>Build & Launch</span>
          <p>
            Once approved, the project is built with performance and
            responsiveness in mind. After testing, we go live and hand
            everything over — with support if needed.
          </p>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Process;
