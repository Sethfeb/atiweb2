import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

export interface Equipment {
  id: string;
  title: {
    en: string;
    ko: string;
    zh: string;
  };
  description: {
    en: string;
    ko: string;
    zh: string;
  };
  specifications: {
    en: string;
    ko: string;
    zh: string;
  };
  images: string[];
}

const DATA_FILE = join(process.cwd(), 'data', 'equipment.json');

export function getEquipment(): Equipment[] {
  try {
    const fileContents = readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading equipment data:', error);
    return [];
  }
}

export function saveEquipment(equipment: Equipment[]): void {
  try {
    writeFileSync(DATA_FILE, JSON.stringify(equipment, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving equipment data:', error);
    throw error;
  }
}

export function getEquipmentById(id: string): Equipment | undefined {
  const equipment = getEquipment();
  return equipment.find(item => item.id === id);
}

export function addEquipment(newEquipment: Omit<Equipment, 'id'>): Equipment {
  const equipment = getEquipment();
  const id = Date.now().toString();
  const newItem: Equipment = { ...newEquipment, id };
  equipment.push(newItem);
  saveEquipment(equipment);
  return newItem;
}

export function updateEquipment(id: string, updatedEquipment: Partial<Equipment>): Equipment | null {
  const equipment = getEquipment();
  const index = equipment.findIndex(item => item.id === id);
  if (index === -1) return null;
  
  equipment[index] = { ...equipment[index], ...updatedEquipment };
  saveEquipment(equipment);
  return equipment[index];
}

export function deleteEquipment(id: string): boolean {
  const equipment = getEquipment();
  const filtered = equipment.filter(item => item.id !== id);
  if (filtered.length === equipment.length) return false;
  
  saveEquipment(filtered);
  return true;
}
