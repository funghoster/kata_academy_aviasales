import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './filterSlice'

export default configureStore({
  reducer: {
    filters: filtersReducer,
  },
})
