export const search = (searchWord) => {
  return {
    type: "SEARCH_ACTION",
    payload: searchWord,
  };
};
export const sorting = (sortType) => {
  return {
    type: "SORT_ACTION",
    payload: sortType,
  };
};
