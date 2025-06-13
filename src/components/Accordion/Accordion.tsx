'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from './Accordion.module.scss';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const Accordion = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: AccordionProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: isOpen ? 'auto' : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.3,
        ease: 'power1.out',
      });
    }
  }, [isOpen]);

  return (
    <div className={styles.faqItem}>
      <button
        onClick={onClick}
        className={styles.question}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        <span>{question}</span>
      </button>
      <div className={styles.hr} />
      <div
        ref={contentRef}
        className={styles.answer}
        aria-hidden={!isOpen}
        id={`accordion-content-${index}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
