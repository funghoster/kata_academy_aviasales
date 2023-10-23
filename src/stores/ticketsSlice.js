import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearchId = createAsyncThunk('tickets/fetchSearchId', async function (_, { rejectWithValue }) {
  try {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!response.ok) {
      throw new Error(`Ошибка получения данных: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async function (_, { dispatch, getState }) {
  if (getState().tickets.searchId === null) return
  let continueFetch = true
  const id = getState().tickets.searchId
  while (continueFetch) {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      if (!response.ok) {
        dispatch(errorIncrement())
      }
      const data = await response.json()
      dispatch(addTickets(data.tickets))

      if (data.stop) {
        continueFetch = false
      }
    } catch (error) {
      dispatch(errorIncrement())
    }
  }
})

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchId: null,
    tickets: [],
    count: 5,
    isLoading: false,
    criticalError: false,
    criticalErrorMessage: '',
    error: false,
    errorCount: 0,
  },
  reducers: {
    addTickets(state, action) {
      state.tickets = [...state.tickets, ...action.payload]
    },
    increment(state) {
      state.count += 5
    },
    errorIncrement(state) {
      state.error = true
      state.errorCount++
    },
    closeError(state) {
      state.error = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.isLoading = true
        state.criticalError = false
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.isLoading = false
        state.criticalError = false
        state.searchId = action.payload.searchId
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.isLoading = false
        state.criticalError = true
        state.criticalErrorMessage = action.payload
      })
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true
        state.error = false
      })
      .addCase(fetchTickets.fulfilled, (state) => {
        state.isLoading = false
      })
  },
})

export const { addTickets, increment, errorIncrement, closeError } = ticketsSlice.actions

export default ticketsSlice.reducer
