import { ButtonAsLink, ContentContainer, DecorativeLines } from '@/components';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.container}>
      <DecorativeLines count={5} animated={true} darkSection />
      <ContentContainer>
        <div className={styles.heroTextContainer}>
          <h1 data-aos="fade-right" data-aos-duration="1000">
            PRUSITE
          </h1>
          <div className={styles.heroText}>
            <span
              className={styles.line1}
              data-aos="fade-left"
              data-aos-delay="1000"
            >
              Design & tech
            </span>
            <span
              className={styles.line2}
              data-aos="fade-left"
              data-aos-delay="1300"
            >
              to launch your
            </span>
            <span
              className={styles.line3}
              data-aos="fade-left"
              data-aos-delay="1600"
            >
              online presence
            </span>
          </div>
        </div>
        <ButtonAsLink
          text="Contact us"
          href="#contact"
          className={styles.contactBtn}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="2000"
        />
      </ContentContainer>
      <div className={styles.verticalLine}>
        <div className={styles.whiteLine} />
      </div>
    </section>
  );
};

export default Hero;
