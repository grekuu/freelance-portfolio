'use client';

import styles from './WorkItem.module.scss';
import { useCursor } from '../../../../providers/CursorProvider';
import Image from 'next/image';

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
          className={styles.imageWrapper}
          data-aos="zoom-in"
          data-aos-duration="1000"
          onMouseEnter={() => {
            setCursorText('CHECK');
            setIsHovering(true);
          }}
          onMouseLeave={() => {
            setIsHovering(false);
          }}
        >
          <Image src={image} alt={companyName} fill className={styles.image} />
        </div>
      </div>
      <div className={styles.workInfo}>
        <span data-aos="fade-right" data-aos-duration="1000">
          {companyName}
        </span>
        <span data-aos="fade-left" data-aos-duration="1000">
          {service}
        </span>
      </div>
    </div>
  );
};

export default WorkItem;
