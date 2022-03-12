export const setLocalFavorites = (data: Array<Object>) => localStorage.setItem('favorites', JSON.stringify(data));

export const getLocalFavorites = () => {
  const localFavorites: string | null = localStorage.getItem('favorites');
  if (!localFavorites) return null;
  const jsonData: Array<any> = JSON.parse(localFavorites);

  return jsonData;
};

export const removeFavorite = (id: number) => {
  const localFavorites = getLocalFavorites();
  const newFavorite = localFavorites?.filter((favorite) => favorite.id !== id);
  if (!newFavorite) return false;

  return setLocalFavorites(newFavorite);
};

export const resetLocalFavorites = () => localStorage.removeItem('favorites');

export const isFavorite = (id: number) => {
  const favorite = getLocalFavorites();
  if (!favorite) return false;
  return favorite.filter((item) => item.id === id).length > 0;
};

export const countFavoritePage = (perPage: number) => {
  const localFavorites = getLocalFavorites();
  return Math.ceil((localFavorites?.length || 0) / perPage);
};

export const getCurrentPageItem = (page: number, totalPage: number, perPage: number) => {
  const localFavorites = getLocalFavorites() || [];
  if (totalPage <= 1) return localFavorites;
  const currentItems = localFavorites.splice((page - 1) * perPage, perPage);
  return currentItems;
};
