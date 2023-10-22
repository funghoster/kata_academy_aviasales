import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../card'
import { fetchSearchId, fetchTickets } from '../../stores/ticketsSlice'

const FlightList = () => {
  const dispatch = useDispatch()
  const isSearchId = useSelector((state) => state.tickets.searchId)
  const newArr = new Array(5).fill({})
  const [arr, setArr] = useState(newArr)
  const elements = arr.map((el, index) => {
    return <Card key={index} />
  })

  useEffect(() => {
    dispatch(fetchSearchId())
  }, [])

  useEffect(() => {
    dispatch(fetchTickets())
  }, [isSearchId, dispatch])
  return <>{elements}</>
}

export default FlightList
