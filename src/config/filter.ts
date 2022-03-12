export const countryOption = [
  { label: 'Japan', value: 'JP' },
  { label: 'South Korea', value: 'KR' },
  { label: 'China', value: 'CN' },
  { label: 'Taiwan', value: 'TW' },
];

// generate list of year for filter option
const generateYear = () => {
  const max = new Date().getFullYear();
  const min = 1940;
  const years = [];

  for (let i = max; i >= min; i -= 1) {
    years.push({ label: i.toString(), value: i.toString() });
  }
  return years;
};

export const yearOption = generateYear();

export const contentType = [
  { label: 'All' },
  { label: 'Anime' },
  { label: 'Manga' },
  { label: 'Character' },
];
