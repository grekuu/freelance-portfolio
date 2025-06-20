'use client';

import { Button, ContentContainer, SectionTag } from '@/components';
import styles from './Contact.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { southEastArrow } from '../../../public';
import Select from 'react-select';

const packageOptions = [
  { value: 'standard', label: 'Standard' },
  { value: 'premium', label: 'Premium' },
  { value: 'custom', label: 'Custom' },
];

const Contact = () => {
  return (
    <section className={styles.container}>
      <ContentContainer customClassName={styles.contentContainer}>
        <SectionTag text="Contact" darkSection />
        <div className={styles.bothSections}>
          <div className={styles.sectionLeft}>
            <h2 className={styles.sectionTitle}>Let&apos;s collaborate!</h2>
            <Link href="#" className={styles.callLink}>
              BOOK A CALL
              <Image
                src={southEastArrow}
                alt="South East Arrow"
                className={styles.southEastArrow}
              />
            </Link>
            <Link href="#" className={styles.phoneNumber}>
              +48 790-690-315
            </Link>
            <Link href="#" className={styles.email}>
              contact@prusk.com
            </Link>
          </div>

          <div className={styles.sectionRight}>
            <form className={styles.contactForm}>
              <input
                type="text"
                placeholder="John"
                className={styles.input}
                name="name"
                autoComplete="name"
              />
              <input
                type="text"
                placeholder="mail@example.com"
                className={styles.input}
                name="email"
                autoComplete="email"
              />
              <Select
                instanceId="package-select"
                options={packageOptions}
                classNames={{
                  control: () => styles.selectControl,
                  menu: () => styles.selectMenu,
                  option: ({ isFocused }) =>
                    isFocused ? styles.optionFocused : styles.option,
                  singleValue: () => styles.selectValue,
                  placeholder: () => styles.selectPlaceholder,
                  indicatorSeparator: () => styles.hidden,
                  dropdownIndicator: () => styles.dropdownIndicator,
                }}
                placeholder="Package"
                className={styles.reactSelect}
              />
              <textarea
                placeholder="Project Details"
                name="Project Details"
                className={`${styles.input} ${styles.textarea}`}
                rows={4}
              />
              <Button text="Submit" />
            </form>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Contact;
