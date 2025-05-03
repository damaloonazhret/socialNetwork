import styles from './Button.module.css';
import type { ReactNode } from 'react';

type TButtonProps = {
  children: ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: TButtonProps) => {
  const handleClick = () => {
    console.log('click');
    console.log('click');
    console.log('click');
    console.log('click');
    console.log('click');
    console.log('click');
    console.log('click');
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
    if (onClick) onClick();
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
      test auth auth test
    </button>
  );
};
