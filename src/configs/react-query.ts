import { DefaultOptions, QueryClient } from "react-query";

const queryConfig: DefaultOptions = {
  queries: {
    keepPreviousData: true,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
