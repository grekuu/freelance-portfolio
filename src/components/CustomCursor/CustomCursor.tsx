'use client';

import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const mouseMoveHandler = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    gsap.ticker.add(() => {
      gsap.to(cursor, {
        duration: 1,
        x: mouseX,
        y: mouseY,
        ease: 'power2.out',
      });
    });

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return <div className={styles.cursor} ref={cursorRef} />;
};

export default CustomCursor;
