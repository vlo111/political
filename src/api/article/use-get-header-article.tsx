import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';

import client from 'api/client';

/** Node Type Property */
export type ProjectNodeTypePropertyReturnData = {
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
  data: ProjectNodeTypePropertyReturnData;
};

type Options = UseQueryOptions<ReturnData, Error, ProjectNodeTypePropertyReturnData>;
type Result = UseQueryResult<ProjectNodeTypePropertyReturnData>;

export const url = '/public/getHero';

export const useGetHeaderArticle = (options: Options): Result => {
  const result = useQuery({
    queryKey: [url],
    queryFn: () => client.get(url).then((data) => data.data),
    ...options,
  });
  const { data, isSuccess } = result;

  return {
    data: isSuccess ? data : ([] as ProjectNodeTypePropertyReturnData[]),
  } as Result;
};
