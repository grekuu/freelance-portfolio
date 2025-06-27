'use client';

import { Button, ContentContainer, SectionTag } from '@/components';
import styles from './Contact.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { southEastArrow } from '../../../public';
import Select from 'react-select';
import { useCursor } from '@/providers/CursorProvider';

const packageOptions = [
  { value: 'standard', label: 'Standard' },
  { value: 'premium', label: 'Premium' },
  { value: 'custom', label: 'Custom' },
];

const Contact = () => {
  const { setIsHovering, setCursorText } = useCursor();
  return (
    <section className={styles.container} id="contact">
      <ContentContainer customClassName={styles.contentContainer}>
        <SectionTag text="Contact" darkSection />
        <div className={styles.bothSections}>
          <div className={styles.sectionLeft}>
            <h2 className={styles.sectionTitle}>Let&apos;s collaborate!</h2>
            <Link
              href="#"
              className={styles.callLink}
              onMouseEnter={() => {
                setCursorText('FREE');
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
            >
              BOOK A CALL
              <Image
                src={southEastArrow}
                alt="South East Arrow"
                className={styles.southEastArrow}
                loading="lazy"
              />
            </Link>
            <Link
              href="#"
              className={styles.phoneNumber}
              data-contrast-ok="true"
            >
              +48 790-690-315
            </Link>
            <Link href="#" className={styles.email}>
              contact@prusk.com
            </Link>
          </div>

          <div className={styles.sectionRight}>
            <form className={styles.contactForm}>
              <label htmlFor="name" className={styles.visuallyHidden}>
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John"
                className={styles.input}
                name="name"
                autoComplete="name"
              />

              <label htmlFor="email" className={styles.visuallyHidden}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="mail@example.com"
                className={styles.input}
                name="email"
                autoComplete="email"
              />

              <label htmlFor="package" className={styles.visuallyHidden}>
                Package
              </label>
              <Select
                instanceId="package-select"
                inputId="package"
                options={packageOptions}
                classNames={{
                  control: () => styles.selectControl,
                  menu: () => styles.selectMenu,
                  option: ({ isFocused }) =>
                    isFocused ? styles.optionFocused : styles.option,
                  singleValue: () => styles.selectValue,
                  placeholder: () => styles.selectPlaceholder,
                  indicatorSeparator: () => styles.hidden,
                }}
                placeholder="Package"
                className={styles.reactSelect}
              />

              <label htmlFor="message" className={styles.visuallyHidden}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Project Details"
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
