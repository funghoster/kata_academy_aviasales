import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin, Alert } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { LoadingOutlined } from '@ant-design/icons'

import Card from '../card'
import { fetchSearchId, fetchTickets, increment } from '../../stores/ticketsSlice'
import filteredTickets from '../../selectors/filter-selector'

const FlightList = () => {
  const dispatch = useDispatch()
  const { searchId: isSearchId, isLoading, count } = useSelector((state) => state.tickets)
  const sortState = useSelector((state) => state.sort.sort)
  const tickets = useSelector(filteredTickets).sort((a, b) => {
    const getDuration = (ticket) => {
      return ticket.segments[0].duration + ticket.segments[1].duration
    }
    const aDuration = getDuration(a)
    const bDuration = getDuration(b)
    switch (sortState) {
      case 'CHEAPEST':
        return a.price - b.price

      case 'FASTEST':
        return aDuration - bDuration

      case 'OPTIMAL':
        return a.price / aDuration - b.price / bDuration

      default:
        return
    }
  })

  const ticketsToDisplay = tickets.slice(0, count)
  const elements = ticketsToDisplay.map((ticket) => {
    return <Card key={uuidv4()} tickets={ticket} />
  })

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  const footer = isLoading ? (
    <Spin indicator={antIcon} align={'center'} size="large" />
  ) : tickets.length === 0 ? (
    <Alert
      className="aviasales__alert"
      message="Рейсов, подходящих под заданные фильтры, не найдено"
      description="Пожалуйста, выберите количество пересадок"
      type="info"
    />
  ) : (
    <button className="aviasales__next" onClick={() => dispatch(increment())}>
      Показать еще {Math.max(0, Math.min(5, tickets.length - count))} билетов!
    </button>
  )

  useEffect(() => {
    if (!isSearchId) dispatch(fetchSearchId())
  }, [])

  useEffect(() => {
    dispatch(fetchTickets())
  }, [isSearchId, dispatch])
  return (
    <>
      {elements}
      {footer}
    </>
  )
}

export default FlightList
