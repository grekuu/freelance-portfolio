'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type CursorContextType = {
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
