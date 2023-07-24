import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import client from 'api/client';

export const url = '/public/getHero';

export const useGetHeaderArticle: unknown = (
  options:
    | (Omit<UseQueryOptions<unknown, unknown, unknown, string[]>, 'initialData' | 'queryFn' | 'queryKey'> & {
        initialData?: (() => undefined) | undefined;
      })
    | undefined
) => {
  const result = useQuery(
    [url],
    async () => {
      const response = await client.get(`${url}`);
      return response.data;
    },
    options
  );
  const { data, isSuccess } = result;

  return {
    ...result,
    data: isSuccess ? data : [],
  };
};
