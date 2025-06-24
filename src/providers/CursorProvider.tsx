'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type CursorContextType = {
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('CHECK');

  return (
    <CursorContext.Provider
      value={{ isHovering, setIsHovering, cursorText, setCursorText }}
    >
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
