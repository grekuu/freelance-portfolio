import styles from './WorkItem.module.scss';

type WorkItemProps = {
  image: string;
  companyName: string;
  service: string;
};

const WorkItem = ({ image, companyName, service }: WorkItemProps) => {
  return (
    <div className={styles.workItem}>
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className={styles.workInfo}>
        <span>{companyName}</span>
        <span>{service}</span>
      </div>
    </div>
  );
};

export default WorkItem;
