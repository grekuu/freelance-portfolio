import styles from './ContentContainer.module.scss';

type ContentContainerProps = {
  children: React.ReactNode;
};

const ContentContainer = ({ children }: ContentContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContentContainer;
