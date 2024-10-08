import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Color } from '../types/Types';
import { getColor } from '../services/Api';

interface ColorContextProps {
  color: Color;
  setColor: React.Dispatch<React.SetStateAction<Color>>;
}

interface ColorProviderProps {
  children: ReactNode;  // Define explicitamente o tipo de children
}

export const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<Color>({ red: 0, green: 0, blue: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getColor();
      if (data) setColor(data);
    };
    fetchData();
  }, []);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};