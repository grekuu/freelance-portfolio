import styles from './DecorativeLines.module.scss';

interface LineProps {
  count?: number;
  darkSection?: boolean;
  color?: string;
  animated?: boolean;
  className?: string;
}

const DecorativeLines = ({
  count = 2,
  darkSection = false,
  animated = false,
  className,
}: LineProps) => {
  return (
    <div
      className={`${styles.container} ${animated ? styles.animated : ''} ${className || ''}`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`${styles.line} ${darkSection ? styles.lightTheme : ''}`}
          style={{
            animationDelay: animated ? `${index * 0.2}s` : '0s',
          }}
        />
      ))}
    </div>
  );
};

export default DecorativeLines;
