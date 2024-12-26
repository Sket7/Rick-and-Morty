export const validPage = (seterPage: number, maxPages: number): number => {
  if (seterPage < 1) return 1;
  if (seterPage > maxPages) return maxPages;
  return seterPage;
};
