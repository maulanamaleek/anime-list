/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useLazyQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@mui/material';
import { FILTER_ANIME } from '../../utils/gql-helpers';
import { Filter } from '../../models/filter';
import AnimeCard from '../AnimeCard/AnimeCard';
import { formatTitleSlug } from '../../utils/string-helpers';
import useSkeleton from '../Skeletons/useSkeleton';

const FilteredList: React.FC<Filter> = ({
  search, year, genre, country, page,
}) => {
  const [anime, setAnime] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [hasMore, setHasMore] = useState(true);
  const [length, setLength] = useState(20);
  const removeEmpty = () => {
    const params: any = {};
    if (search) params.search = search;
    if (year) params.year = Number(year);
    if (genre) params.genres = [genre];
    if (country) params.countryOfOrigin = country;

    return params;
  };

  const { loadSkeletonCard } = useSkeleton();

  const [getList, { loading, data }] = useLazyQuery(FILTER_ANIME);

  const { data: data1, loading: loading1 } = useQuery(FILTER_ANIME, {
    variables: {
      page,
      ...removeEmpty(),
    },
  });

  useEffect(() => {
    setAnime(data1?.Page?.media);
    setHasMore(data1?.Page?.pageInfo?.hasNextPage);
  }, [data1]);

  useEffect(() => {
    if (data) {
      const newData = [...anime, ...data.Page.media];
      setAnime(newData);
    }
    setHasMore(data?.Page?.pageInfo?.hasNextPage);
    setLength(length + 20);
  }, [data]);

  const getMoreData = () => {
    setCurrentPage(currentPage + 1);
    getList({
      variables: {
        page: currentPage,
        ...removeEmpty(),
      },
    });
  };

  if (loading1) return loadSkeletonCard(10);

  return (

    <InfiniteScroll
      dataLength={length}
      next={() => getMoreData()}
      hasMore={hasMore}
      loader={loadSkeletonCard(5)}
      scrollThreshold={0.9}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          justifyContent: 'space-between',
          rowGap: '30px',
        }}
      >
        {anime?.map((item) => (
          <Link key={item?.id} to={`/anime/${item?.id}/${formatTitleSlug(item?.title?.userPreferred)}`}>
            <AnimeCard
              imageUrl={item?.coverImage?.large}
              title={item?.title?.userPreferred}
              genres={item?.genres}
            />
          </Link>
        ))}
      </Box>
    </InfiniteScroll>
  );
};

export default FilteredList;
