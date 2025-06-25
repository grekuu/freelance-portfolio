import { ContentContainer, DecorativeLines, SectionTag } from '@/components';
import styles from './Services.module.scss';
import { offersData } from '@/data';
import { OfferCard } from './components';

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
          Flexible packages tailored to your goals. Whether you need a simple
          site or a custom solution, we’ve got you covered.
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
      </ContentContainer>
    </section>
  );
};

export default Services;
