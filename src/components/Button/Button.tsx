import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonAsLinkProps = {
  text: string;
  href: string;
  className?: string;
  'data-aos'?: string;
  'data-aos-delay'?: string;
};

type ButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

export const ButtonAsLink = ({
  text,
  href,
  className,
  ...restProps
}: ButtonAsLinkProps) => {
  return (
    <Link
      href={href}
      className={`${styles.button} ${className || ''}`}
      {...restProps}
    >
      {text}
    </Link>
  );
};

export const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${className || ''}`} onClick={onClick}>
      {text}
    </button>
  );
};
