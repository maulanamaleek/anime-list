import { Filter } from '../models/filter';

export const isFilterEmpty = (filter: Filter) => {
  if (!filter.genre && !filter.country && !filter.year && !filter.search) return true;
  return false;
};
