import Image, { StaticImageData } from 'next/image';
import styles from './WorkItem.module.scss';

type WorkItemProps = {
  image: StaticImageData;
  companyName: string;
  service: string;
};

const WorkItem = ({ image, companyName, service }: WorkItemProps) => {
  return (
    <div className={styles.workItem}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={companyName} />
      </div>
      <div className={styles.workInfo}>
        <span>{companyName}</span>
        <span>{service}</span>
      </div>
    </div>
  );
};

export default WorkItem;
