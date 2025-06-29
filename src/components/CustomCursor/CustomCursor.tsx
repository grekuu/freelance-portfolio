'use client';

import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';
import { gsap } from 'gsap';
import { useCursor } from '@/providers/CursorProvider';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { isHovering, cursorText } = useCursor();

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

  return (
    <div
      className={`${styles.cursor} ${isHovering ? styles.enlarged : ''}`}
      ref={cursorRef}
    >
      {isHovering && <span className={styles.cursorText}>{cursorText}</span>}
    </div>
  );
};

export default CustomCursor;
