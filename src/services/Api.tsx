import axios from 'axios';
import { Color } from '../types/Types';

const API_URL = 'http://localhost:3011';

export const getColor = async (): Promise<Color | null> => {
  try {
    const response = await axios.get(`${API_URL}/get`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter a cor do servidor', error);
    return null;
  }
};

export const saveColor = async (color: Color): Promise<void> => {
  try {
    await axios.post(`${API_URL}/save`, color);
  } catch (error) {
    console.error('Erro ao salvar a cor no servidor', error);
  }
};