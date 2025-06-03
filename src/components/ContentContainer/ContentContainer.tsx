import styles from './ContentContainer.module.scss';

type ContentContainerProps = {
  children: React.ReactNode;
  customClassName?: string;
};

const ContentContainer = ({
  children,
  customClassName,
}: ContentContainerProps) => {
  return (
    <div className={`${styles.container} ${customClassName || ''}`}>
      {children}
    </div>
  );
};

export default ContentContainer;
