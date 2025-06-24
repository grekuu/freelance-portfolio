'use client';

import styles from './WorkItem.module.scss';
import { useCursor } from '../../../../providers/CursorProvider';

type WorkItemProps = {
  image: string;
  companyName: string;
  service: string;
};

const WorkItem = ({ image, companyName, service }: WorkItemProps) => {
  const { setIsHovering, setCursorText } = useCursor();

  return (
    <div className={styles.workItem}>
      <div className={styles.imageContainer}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
          onMouseEnter={() => {
            setCursorText('CHECK');
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
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
