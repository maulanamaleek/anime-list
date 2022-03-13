import { makeVar } from '@apollo/client';
import { Filter } from '../models/filter';

// Reactive Variables
export const filtersVar = makeVar<Filter>({
  search: '',
  year: '',
  genre: '',
  country: '',
  page: 1,
  sort: '',
  type: 'ANIME',
});
