import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Color } from '../types/Types';
import { getColor } from '../services/Api';  // Certifique-se de que este serviço está corretamente implementado

interface ColorContextProps {
  color: Color;
  setColor: React.Dispatch<React.SetStateAction<Color>>;
}

interface ColorProviderProps {
  children: ReactNode;
}

export const ColorContext = createContext<ColorContextProps | undefined>(undefined);

export const ColorProvider: React.FC<ColorProviderProps> = ({ children }) => {
  const [color, setColor] = useState<Color>({ red: 0, green: 0, blue: 0 });

  const fetchColor = async () => {
    try {
      const res = await getColor();  // Chama o serviço de API para obter a cor
      console.log(res);
      if (res) {
        setColor(res);  // Define a cor se houver dados
      }
    } catch (error) {
      console.error('Erro ao buscar a cor:', error);
    }
  };

  useEffect(() => {
    fetchColor();  // Chama a função de busca ao montar o componente
  }, []);  // O array vazio significa que o efeito só será executado uma vez após o componente ser montado

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};