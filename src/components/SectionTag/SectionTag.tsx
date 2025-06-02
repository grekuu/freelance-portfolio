import styles from './SectionTag.module.scss';

type SectionTagProps = {
  text: string;
  darkSection?: boolean;
};

const SectionTag = ({ text, darkSection }: SectionTagProps) => {
  return (
    <span className={`${styles.tag} ${darkSection ? styles.lightTheme : ''}`}>
      {text}
    </span>
  );
};

export default SectionTag;
