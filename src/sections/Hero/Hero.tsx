import { ButtonAsLink, ContentContainer, DecorativeLines } from '@/components';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.container}>
      <DecorativeLines count={5} animated={true} />
      <ContentContainer>
        <div className={styles.heroTextContainer}>
          <h1>PRUSK</h1>
          <h3>
            <span className={styles.line1}>Design & tech</span>
            <span className={styles.line2}>to launch your</span>
            <span className={styles.line3}>online presence</span>
          </h3>
        </div>
        <ButtonAsLink
          text="Contact us"
          href="#contact"
          className={styles.contactBtn}
        />
      </ContentContainer>
      <div className={styles.verticalLine}>
        <div className={styles.whiteLine} />
      </div>
    </section>
  );
};

export default Hero;
