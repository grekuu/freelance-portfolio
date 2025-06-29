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
  disabled?: boolean;
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

export const Button = ({ text, onClick, className, disabled }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
