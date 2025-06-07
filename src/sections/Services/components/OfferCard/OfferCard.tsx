import styles from './OfferCard.module.scss';

type OfferCardProps = {
  title: string;
  price: string;
  description: string;
  features: string[];
  darkMode?: boolean;
};

const OfferCard = ({
  title,
  price,
  description,
  features,
  darkMode = false,
}: OfferCardProps) => {
  return (
    <div
      className={`${styles.cardContainer} ${darkMode ? styles.darkTheme : ''}`}
    >
      <h3 className={styles.offerTitle}>{title}</h3>
      <p className={styles.offerPrice}>{price}+ PLN</p>
      <p className={styles.offerDescription}>{description}</p>
      <div className={styles.separator} />
      <ul className={styles.offerFeatures}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OfferCard;
