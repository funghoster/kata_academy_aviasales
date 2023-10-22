import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'

import { setSort } from '../../stores/sortSlice'

import styleButton from './flight-filters.module.scss'

const FlightFilters = () => {
  const dispatch = useDispatch()
  const sort = useSelector((state) => state.sort.sort)

  const cheapestClass = classNames(styleButton.buttonSort, {
    [styleButton.buttonSortSelected]: sort === 'CHEAPEST',
  })
  const fastestClass = classNames(styleButton.buttonSort, {
    [styleButton.buttonSortSelected]: sort === 'FASTEST',
  })
  const optimalClass = classNames(styleButton.buttonSort, {
    [styleButton.buttonSortSelected]: sort === 'OPTIMAL',
  })

  const handleSort = (value) => {
    dispatch(setSort(value))
  }

  return (
    <>
      <div className="aviasales__header">
        <button className={cheapestClass} onClick={() => handleSort('CHEAPEST')}>
          Самый дешевый
        </button>
        <button className={fastestClass} onClick={() => handleSort('FASTEST')}>
          Самый быстрый
        </button>
        <button className={optimalClass} onClick={() => handleSort('OPTIMAL')}>
          Оптимальный
        </button>
      </div>
    </>
  )
}

export default FlightFilters
