/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useLazyQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box } from '@mui/material';
import { FILTER_ANIME } from '../../utils/gql-helpers';
import { Filter } from '../../models/filter';
import useSkeleton from '../Skeletons/useSkeleton';
import AnimeGrid from '../AnimeGrid/AnimeGrid';
import { clearDummyAnime, generateDummyAnime } from '../../utils/filter-helpers';

const FilteredList: React.FC<Filter> = (props) => {
  const [anime, setAnime] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(2);
  const [hasMore, setHasMore] = useState(true);
  const [length, setLength] = useState(20);

  const removeEmpty = () => {
    const params: any = {};
    if (props.search) params.search = props.search;
    if (props.year) params.year = Number(props.year);
    if (props.genre) params.genres = [props.genre];
    if (props.country) params.countryOfOrigin = props.country;
    if (props.sort) params.sort = props.sort;
    if (props.type) params.type = props.type;
    return params;
  };

  const { loadSkeletonCard } = useSkeleton();

  const [getList, { data }] = useLazyQuery(FILTER_ANIME);

  const { data: initialData, loading: initialLoading } = useQuery(FILTER_ANIME, {
    variables: {
      page: props.page,
      ...removeEmpty(),
    },
  });

  useEffect(() => {
    setAnime(initialData?.Page?.media);
    setHasMore(initialData?.Page?.pageInfo?.hasNextPage);
  }, [initialData]);

  useEffect(() => {
    if (data) {
      const newData = [...clearDummyAnime(anime), ...data.Page.media];
      setAnime(newData);
    }
    setHasMore(data?.Page?.pageInfo?.hasNextPage);
    setLength(length + 20);
  }, [data]);

  const getMoreData = () => {
    const withSkeleton = [...anime, ...generateDummyAnime(5)];
    setAnime(withSkeleton);
    setCurrentPage(currentPage + 1);
    getList({
      variables: {
        page: currentPage,
        ...removeEmpty(),
      },
    });
  };

  if (initialLoading && (!initialData || !data)) return loadSkeletonCard(10);

  return (
    <Box>
      <InfiniteScroll
        dataLength={length}
        next={() => getMoreData()}
        hasMore={hasMore}
        loader={null}
        scrollThreshold={0.9}
        style={{
          overflow: 'visible',
        }}
      >
        <AnimeGrid animeList={anime} />
      </InfiniteScroll>
    </Box>
  );
};

export default FilteredList;
