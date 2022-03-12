import { useQuery } from '@apollo/react-hooks';
import { useState } from 'react';
import { FILTER_ANIME } from '../../utils/gql-helpers';

const SearchFormLogic = () => {
  const [anime, setAnime] = useState<Array<any>>([]);
  const { data } = useQuery(FILTER_ANIME);

  if (data) setAnime(data);

  function refetch() {
    // const { data: redata } = useQuery(FILTER_ANIME);
    setAnime(data);
  }

  return {
    anime,
    refetch,
  };
};

export default SearchFormLogic;
