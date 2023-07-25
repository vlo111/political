import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

import client from 'api/client';

/** Article Properties */
export type HeaderArticle = {
  id: string;
  user: string;
  date: string;
  preview: string;
  title: string;
  description: string;
  descriptionReferences: string;
  status: string;
  section: string;
  createdAt: string;
  updatedAt: string;
  html: [];
  tags: [];
  author: null;
  softDelete: null;
  views: 8;
};

type ReturnData = {
  data: HeaderArticle;
};

type Options = UseQueryOptions<ReturnData, Error, HeaderArticle>;
type Result = UseQueryResult<HeaderArticle>;

export const url = '/public/getHero';

export const useGetHeaderArticle = (options: Options): Result => {
  const result = useQuery({
    queryKey: [url],
    queryFn: () => client.get(url).then((data) => data),
    ...options,
  });

  const { data, isSuccess } = result;

  return {
    data: isSuccess ? data : ([] as HeaderArticle[]),
  } as Result;
};
