'use client';

import { createContext, useContext, useState, useEffect } from 'react';

// Define the context type
interface ScrollContextType {
  scrollProgress: number;
  setScrollProgress: (progress: number) => void;
}

// Create the context with default values
const ScrollContext = createContext<ScrollContextType>({
  scrollProgress: 0,
  setScrollProgress: () => {},
});

// Provider component
export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <ScrollContext.Provider value={{ scrollProgress, setScrollProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Hook to use the scroll context
export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};