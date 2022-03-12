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
import AnimeCard from '../AnimeCard/AnimeCard';
import { formatTitleSlug } from '../../utils/string-helpers';
import useSkeleton from '../Skeletons/useSkeleton';

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

  const [getList, { loading, data }] = useLazyQuery(FILTER_ANIME);

  const { data: data1, loading: loading1 } = useQuery(FILTER_ANIME, {
    variables: {
      page: props.page,
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

  if (loading1 && (!data1 || !data)) return loadSkeletonCard(10);

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
          pt: 3,
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          justifyContent: 'space-between',
          rowGap: '30px',
        }}
      >
        {anime?.map((item, index) => (
          <Link key={item?.id} to={`/${props.type.toLowerCase()}/${item?.id}/${formatTitleSlug(item?.title?.userPreferred)}`}>
            <AnimeCard
              imageUrl={item?.coverImage?.large}
              title={item?.title?.userPreferred}
              genres={item?.genres}
              rank={index}
              color={item?.coverImage?.color}
            />
          </Link>
        ))}
      </Box>
    </InfiniteScroll>
  );
};

export default FilteredList;
