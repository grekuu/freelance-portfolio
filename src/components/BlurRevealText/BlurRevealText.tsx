'use client';
import styles from './BlurRevealText.module.scss';
import { useEffect, useRef } from 'react';

const BlurRevealText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          containerRef.current?.classList.add(styles.visible);
        }
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');
  let charIndexCounter = 0;

  return (
    <div
      ref={containerRef}
      className={`${styles.blurContainer} ${className || ''}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className={styles.wordWrapper}>
          {word.split('').map((char, index) => {
            const charIndex = charIndexCounter++;
            return (
              <span
                key={`${wordIndex}-${index}`}
                className={styles.blurChar}
                style={
                  {
                    '--char-index': charIndex,
                  } as React.CSSProperties
                }
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span
              className={styles.blurChar}
              style={
                {
                  '--char-index': charIndexCounter++,
                } as React.CSSProperties
              }
            >
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default BlurRevealText;
