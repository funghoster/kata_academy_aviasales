import { createSelector } from '@reduxjs/toolkit'

const filtersState = (state) => state.filters.other
const ticketsState = (state) => state.tickets.tickets

const filteredTickets = createSelector([filtersState, ticketsState], (filters, tickets) => {
  return tickets.filter((ticket) => {
    const transfers = Math.max.apply(
      null,
      ticket.segments.map((segment) => segment.stops.length)
    )
    if (filters.nonStop && transfers === 0) return true
    else if (filters.oneTransfer && transfers === 1) return true
    else if (filters.twoTransfer && transfers === 2) return true
    else if (filters.threeTransfer && transfers !== 3) return true

    return false
  })
})

export default filteredTickets
