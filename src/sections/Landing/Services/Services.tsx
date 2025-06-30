import { ContentContainer, DecorativeLines, SectionTag } from '@/components';
import styles from './Services.module.scss';
import { offersData } from '@/data';
import { OfferCard } from './components';
import Link from 'next/link';

const Services = () => {
  return (
    <section className={styles.container} id="services">
      <DecorativeLines count={2} />
      <ContentContainer>
        <SectionTag text="Services" />
        <h2
          className={styles.sectionTitle}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Solutions for You
        </h2>
        <p
          className={styles.sectionSubtitle}
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          From simple websites to full branding kits — we turn your ideas into
          design-driven digital experiences. Need just a site, or also social
          media visuals, logo, and more? We’ve got you.
        </p>
        <div className={styles.offersContainer}>
          {offersData.map((offer, index) => (
            <OfferCard
              key={index}
              title={offer.title}
              price={offer.price}
              description={offer.description}
              features={offer.features}
              darkMode={index === 1}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              data-aos-duration="800"
            />
          ))}
        </div>
        <p className={styles.pricingNote}>
          * All projects are priced individually based on your needs.{' '}
          <Link href="#contact">Let&apos;s chat</Link> and figure out what fits
          best. <br />
          We also offer standalone graphic and branding services.
        </p>
      </ContentContainer>
    </section>
  );
};

export default Services;
