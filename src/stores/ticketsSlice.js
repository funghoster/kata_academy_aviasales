import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSearchId = createAsyncThunk(
  'tickets/fetchSearchId',
  async function (_, { rejectWithValue, getState }) {
    if (getState().tickets.searchId !== null) return
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
  }
)

export const fetchTickets = createAsyncThunk('tickets/fetchTickets', async function (_, { dispatch, getState }) {
  if (getState().tickets.searchId === null) return
  let continueFetch = true
  const id = getState().tickets.searchId
  while (continueFetch) {
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
      if (!response.ok) {
        throw new Error(`Ошибка получения данных: ${response.status}`)
      }
      const data = await response.json()
      console.log('data', data)
      dispatch(addTickets(data.tickets))

      if (data.stop) {
        console.log('Загрузка окончена')
        continueFetch = false
      }
    } catch (error) {
      console.log(error)
    }
  }
})

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    searchId: null,
    tickets: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
    addTickets(state, action) {
      state.tickets = [...state.tickets, ...action.payload]
      console.log(state.tickets)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.isLoading = false
        state.searchId = action.payload.searchId
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.errorMessage = action.payload
      })
      .addCase(fetchTickets.pending, (state) => {
        state.isLoading = true
        state.isError = false
      })
      .addCase(fetchTickets.fulfilled, (state) => {
        state.isLoading = false
      })
  },
})

export const { addTickets } = ticketsSlice.actions

export default ticketsSlice.reducer
