export const validPage = (seterPage: number, maxPages: number): number => {
  if (seterPage < 0) return 1;
  if (seterPage > maxPages) return maxPages;
  return seterPage;
};
