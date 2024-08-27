// lib/swrConfig.js

import fetcher from "./utils/fetcher";

const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
  revalidateIfStale: false,
  dedupingInterval: 10000000, // Prevents duplicate requests within 2 seconds
  errorRetryInterval: 5000, // Retry after 5 seconds if error occurs
  shouldRetryOnError: true, // Automatically retry on error
  compare: (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b),
};

export default swrConfig;
