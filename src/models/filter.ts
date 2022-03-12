export interface Filter {
  search: string;
  year: string;
  genre: string;
  country: string;
  page?: number;
  sort?: Array<string> | string;
  type: string;
}
