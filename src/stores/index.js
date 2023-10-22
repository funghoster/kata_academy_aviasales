import { configureStore } from '@reduxjs/toolkit'

import filtersReducer from './filterSlice'
import sortReducer from './sortSlice'
import ticketsReducer from './ticketsSlice'

export default configureStore({
  reducer: {
    filters: filtersReducer,
    sort: sortReducer,
    tickets: ticketsReducer,
  },
})
