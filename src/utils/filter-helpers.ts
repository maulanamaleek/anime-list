import { topCategory } from '../config/filter';
import { Filter } from '../models/filter';

export const isFilterEmpty = (filter: Filter) => {
  if (!filter.genre && !filter.country && !filter.year && !filter.search) return true;
  return false;
};

export const checkTopCategory = (category: string) => {
  if (!category) return false;
  if (topCategory.includes(category.toUpperCase())) return true;
  return false;
};

export const isTopRank = (category?: string, rank?: number): boolean => {
  if (!category || !rank) return false;
  if (category.toUpperCase() === 'TOP 100' && rank <= 100) return true;
  return false;
};
