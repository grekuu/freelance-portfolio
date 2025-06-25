'use client';

import {
  Accordion,
  ContentContainer,
  DecorativeLines,
  SectionTag,
} from '@/components';
import styles from './FAQ.module.scss';
import { useState } from 'react';

const faqItems = [
  {
    question: 'What ongoing support do you provide?',
    answer:
      'Absolutely. I offer custom Webflow builds tailored to your business goals, focusing on modern design, scalability, and ease of management. From strategy to launch, I ensure your site is set up for long-term success.',
  },
  {
    question: 'Can you build a brand-new Webflow site for us?',
    answer:
      'Absolutely. I offer custom Webflow builds tailored to your business goals, focusing on modern design, scalability, and ease of management. From strategy to launch, I ensure your site is set up for long-term success.',
  },
  {
    question: 'Can you integrate tools like HubSpot or Zapier?',
    answer:
      'Absolutely. I offer custom Webflow builds tailored to your business goals, focusing on modern design, scalability, and ease of management. From strategy to launch, I ensure your site is set up for long-term success.',
  },
  {
    question: 'Will my website be SEO-friendly?',
    answer:
      'Absolutely. I offer custom Webflow builds tailored to your business goals, focusing on modern design, scalability, and ease of management. From strategy to launch, I ensure your site is set up for long-term success.',
  },
  {
    question: 'Why choose you over a big agency?',
    answer:
      'Absolutely. I offer custom Webflow builds tailored to your business goals, focusing on modern design, scalability, and ease of management. From strategy to launch, I ensure your site is set up for long-term success.',
  },
  {
    question: 'Do you offer branding and visual identity?',
    answer:
      'Absolutely. I offer custom Webflow builds tailored to your business goals, focusing on modern design, scalability, and ease of management. From strategy to launch, I ensure your site is set up for long-term success.',
  },
];

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
            {faqItems.map((item, index) => (
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
