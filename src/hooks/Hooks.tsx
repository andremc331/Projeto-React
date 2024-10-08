import { useContext } from 'react';
import { ColorContext } from '../contexts/Contexto';

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) throw new Error('useColor must be used within a ColorProvider');
  return context;
};