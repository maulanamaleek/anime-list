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
  { label: 'ALL' },
  { label: 'ANIME' },
  { label: 'MANGA' },
  { label: 'CHARACTER' },
];

export const topCategory = [
  'TRENDING', 'TOP 100', 'SEASON', 'UPCOMING', 'POPULAR',
];

export const seasonOption = [
  { label: 'WINTER', quarter: 1 },
  { label: 'SPRING', quarter: 2 },
  { label: 'SUMMER', quarter: 3 },
  { label: 'FALL', quarter: 4 },
];
