const FilterReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        type: action.type,
        payload: {
          filterType: action.filterType
        }
      }
    default:
      return { ...state }
  }
}

export default FilterReducer