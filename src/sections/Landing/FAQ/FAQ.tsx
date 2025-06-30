'use client';

import {
  Accordion,
  ContentContainer,
  DecorativeLines,
  SectionTag,
} from '@/components';
import styles from './FAQ.module.scss';
import { useState } from 'react';
import { faqData } from '@/data';

const FAQ = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null,
  );

  const handleToggle = (index: number) => {
    if (openAccordionIndex === index) {
      setOpenAccordionIndex(null);
    } else {
      setOpenAccordionIndex(index);
    }
  };

  return (
    <section className={styles.container} id="#faq">
      <DecorativeLines count={2} />
      <ContentContainer>
        <SectionTag text="FAQ" />
        <div className={styles.contentWrapper}>
          <h2
            className={styles.sectionTitle}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="800"
          >
            Any questions?
          </h2>
          <div>
            {faqData.map((item, index) => (
              <Accordion
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                isOpen={openAccordionIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default FAQ;
