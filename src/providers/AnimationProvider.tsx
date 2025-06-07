'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const AnimationContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {}, []);

  return <div ref={containerRef}>{children}</div>;
};

export default AnimationContainer;
