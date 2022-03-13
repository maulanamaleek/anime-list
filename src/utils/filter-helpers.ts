import { topCategory } from '../config/filter';
import { Anime } from '../models/anime';
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

export const generateDummyAnime = (amount: number) => {
  const dummyAnime: Array<Anime> = [];

  for (let i = 0; i < amount; i += 1) {
    dummyAnime.push(<Anime>{ title: { userPreferred: 'SKELETON_CARD' } });
  }

  return dummyAnime;
};

export const clearDummyAnime = (animeList: Array<Anime>) => animeList.filter((anime) => anime.title.userPreferred !== 'SKELETON_CARD');
