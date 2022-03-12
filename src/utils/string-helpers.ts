export const formatTitleSlug = (title: string) => title.split(' ').join('-');

export const getTitleFromSlug = (slug: string) => slug?.split('-').join(' ');
