import data from "../utils/data";
const newData = [];
// datayı düzenleme
data.map((item) =>
  newData.push({
    name: item[0],
    company: item[1],
    email: item[2],
    year: item[3].slice(6),
    country: item[4],
    city: item[5],
  })
);
const INITIAL_STATE = {
  newData: newData,
  filteredData: [],
};

//redux yapısı kurulumu
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_ACTION":
      return {
        ...state,
        filteredData: newData.filter((item) =>
          item.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
    case "SORT_ACTION":
      switch (action.payload) {
        // string sıralaması localCompare
        case "name_asc":
          return {
            ...state,
            filteredData: state.filteredData.sort((a, b) =>
              a.name.localeCompare(b.name, undefined, { caseFirst: "upper" })
            ),
          };
        case "name_desc":
          return {
            ...state,
            filteredData: state.filteredData.sort((b, a) =>
              a.name.localeCompare(b.name, undefined, { caseFirst: "upper" })
            ),
          };
        //yıllara göre sıralama
        case "year_asc":
          return {
            ...state,
            filteredData: state.filteredData.sort((b, a) => b.year - a.year),
          };
        case "year_desc":
          return {
            ...state,
            filteredData: state.filteredData.sort((a, b) => b.year - a.year),
          };
        default:
          return state;
      }
  }
};

export default reducer;
