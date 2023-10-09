import { useState } from 'react'
import classNames from 'classnames'

import Card from '../card'

import styleButton from './flight-list.module.scss'

const FlightList = () => {
  const newArr = new Array(5).fill({})
  const [arr, setArr] = useState(newArr)
  const btnClass = classNames(styleButton.buttonSort, styleButton.buttonSortSelected)
  const elements = arr.map((el, index) => {
    return <Card key={index} />
  })
  return (
    <>
      <div className="aviasales__header">
        <button className={btnClass}>Самый дешевый</button>
        <button className={styleButton.buttonSort}>Самый быстрый</button>
        <button className={styleButton.buttonSort}>Оптимальный</button>
      </div>
      {elements}
    </>
  )
}

export default FlightList
