export const filtersMap = (filters: string[]): Record<string, string[]> => {
  return filters.reduce(
    (acc, filter) => {
      const [key, value] = filter.split('+');
      return { ...acc, [key]: [...(acc[key] || []), ...value.split(',')] };
    },
    {} as Record<string, string[]>
  );
};
