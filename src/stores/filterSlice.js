import { createSlice } from '@reduxjs/toolkit'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    all: false,
    other: {
      nonStop: false,
      oneTransfer: false,
      twoTransfer: false,
      threeTransfer: false,
    },
  },
  reducers: {
    toggleAll(state, action) {
      state.all = action.payload
      for (let filter in state.other) {
        state.other[filter] = action.payload
      }
    },
    toggleFilter: (state, action) => {
      const { filterName, checked } = action.payload
      state.other[filterName] = checked

      if (filterName !== 'all' && !checked) {
        state.all = false
      }

      if (filterName !== 'all' && checked) {
        state.all = Object.values(state.other).every((filter) => filter)
      }
    },
  },
})

export const { toggleAll, toggleFilter } = filtersSlice.actions
export default filtersSlice.reducer
