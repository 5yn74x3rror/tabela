export const getKeys = data => Object.keys(data[0]);

export const sortBy = (field, reverse, primer) => {
  const key = primer ? x => primer(x[field]) : x => x[field];
  const isReversed = !reverse ? 1 : -1;

  return (a, b) => {
    const A = key(a);
    const B = key(b);
    return isReversed * ((A > B) - (B > A));
  };
};

const chooseSortOrder = direction => direction === 'asc';

export const sort = {
  sortNumbers: (field, reverse) => sortBy(field, chooseSortOrder(reverse), parseFloat),
  sortStrings: (field, reverse) => sortBy(field, !chooseSortOrder(reverse), a => a.toUpperCase()),
};

export default {};
