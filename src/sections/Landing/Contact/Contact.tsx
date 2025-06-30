'use client';

import { Button, ContentContainer, SectionTag } from '@/components';
import styles from './Contact.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { southEastArrow } from '../../../../public';
import Select from 'react-select';
import { useCursor } from '@/providers/CursorProvider';
import { Controller, useForm } from 'react-hook-form';
import useWeb3forms from '@web3forms/react';

type ContactFormData = {
  name: string;
  email: string;
  package: string;
  message: string;
};

type PackageOption = {
  value: string;
  label: string;
};

const packageOptions: PackageOption[] = [
  { value: 'standard', label: 'Standard' },
  { value: 'premium', label: 'Premium' },
  { value: 'custom', label: 'Custom' },
];

const Contact = () => {
  const { setIsHovering, setCursorText } = useCursor();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ContactFormData>();

  const { submit } = useWeb3forms({
    access_key: '04517f5b-e4b7-4b37-a3ff-40e6785e2870',
    settings: {
      from_name: 'Prusk.com Contact Form',
      subject: 'New Contact Form Submission',
    },
    onSuccess: () => {
      reset();
    },
    onError: (error) => {
      console.error('Form submission error:', error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submit(data);
  };

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
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="name" className={styles.visuallyHidden}>
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John"
                className={styles.input}
                autoComplete="name"
                {...register('name', {
                  required: 'Name is required',
                  minLength: {
                    value: 2,
                    message: 'Name must be at least 2 characters',
                  },
                })}
              />
              {errors.name && (
                <p className={styles.errorText}>{errors.name.message}</p>
              )}

              <label htmlFor="email" className={styles.visuallyHidden}>
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="mail@example.com"
                className={styles.input}
                autoComplete="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <p className={styles.errorText}>{errors.email.message}</p>
              )}

              <label htmlFor="package" className={styles.visuallyHidden}>
                Package
              </label>
              <Controller
                name="package"
                control={control}
                rules={{ required: 'Please select a package' }}
                render={({ field }) => {
                  const selectedOption = packageOptions.find(
                    (option) => option.value === field.value,
                  );

                  return (
                    <Select<PackageOption>
                      {...field}
                      instanceId="package-select"
                      inputId="package"
                      options={packageOptions}
                      value={selectedOption}
                      onChange={(option) =>
                        field.onChange(option ? option.value : '')
                      }
                      placeholder="Package"
                      classNames={{
                        control: (state) =>
                          `${styles.selectControl} ${state.isFocused ? styles.focused : ''} ${errors.package ? styles.inputError : ''}`,
                        menu: () => styles.selectMenu,
                        option: ({ isFocused }) =>
                          isFocused ? styles.optionFocused : styles.option,
                        singleValue: () => styles.selectValue,
                        placeholder: () => styles.selectPlaceholder,
                        indicatorSeparator: () => styles.hidden,
                      }}
                    />
                  );
                }}
              />
              {errors.package && (
                <p className={styles.errorText}>{errors.package.message}</p>
              )}

              <label htmlFor="message" className={styles.visuallyHidden}>
                Message
              </label>
              <textarea
                id="message"
                placeholder="Project Details"
                className={`${styles.input} ${styles.textarea}`}
                rows={4}
                {...register('message', {
                  required: 'Enter your Message',
                })}
              />
              {errors.message && (
                <p className={styles.errorText}>{errors.message.message}</p>
              )}

              <Button
                text="Submit"
                onClick={() => {
                  handleSubmit(onSubmit)();
                }}
              />
            </form>
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

export default Contact;
