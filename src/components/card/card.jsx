import React from 'react'
import moment from 'moment-timezone'

const Card = ({ tickets }) => {
  const { price, carrier, segments } = tickets
  const [segmentIn, segmentOut] = segments
  function getNoun(number, one, two, five) {
    let n = Math.abs(number)
    n %= 100
    if (n >= 5 && n <= 20) {
      return five
    }
    n %= 10
    if (n === 1) {
      return one
    }
    if (n >= 2 && n <= 4) {
      return two
    }
    return five
  }

  function getDuration(timestamp) {
    const hours = Math.floor(timestamp / 60)
    const minutes = Math.floor(timestamp - hours * 60)
    return hours !== 0 ? `${hours}ч ${minutes}м` : `${minutes}м`
  }

  function getTime(timestamp) {
    const moscowTime = moment.tz(timestamp, 'Europe/Moscow').format('HH:mm')
    const hongKongTime = moment.tz(timestamp, 'Asia/Hong_Kong').format('HH:mm')
    return {
      MOW: moscowTime,
      HKT: hongKongTime,
    }
  }
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__price">{price.toLocaleString('ru')} Р</div>

        <img className="card__logo" src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div className="card__body">
        <div className="card__info">
          <div className="card__time">
            <div className="card__info-header">{`${segmentIn.origin} - ${segmentIn.destination}`}</div>
            <div className="card__info-body">{`${getTime(segmentIn.date)[segmentIn.origin]} - ${
              getTime(segmentIn.date)[segmentIn.destination]
            }`}</div>
          </div>
          <div className="card__way">
            <div className="card__info-header">В пути</div>
            <div className="card__info-body">{getDuration(segmentIn.duration)}</div>
          </div>
          <div className="card__change">
            <div className="card__info-header">{`${
              segmentIn.stops.length === 0 ? 'без' : segmentIn.stops.length
            } ${getNoun(segmentIn.stops.length, 'пересадка', 'пересадки', 'пересадок')}`}</div>
            <div className="card__info-body">{segmentIn.stops.join(', ')}</div>
          </div>
        </div>
        <div className="card__info">
          <div className="card__time">
            <div className="card__info-header">{`${segmentOut.origin} - ${segmentOut.destination}`}</div>
            <div className="card__info-body">{`${getTime(segmentOut.date)[segmentOut.origin]} - ${
              getTime(segmentOut.date)[segmentOut.destination]
            }`}</div>
          </div>
          <div className="card__way">
            <div className="card__info-header">В пути</div>
            <div className="card__info-body">{getDuration(segmentOut.duration)}</div>
          </div>
          <div className="card__change">
            <div className="card__info-header">{`${
              segmentOut.stops.length === 0 ? 'без' : segmentOut.stops.length
            } ${getNoun(segmentOut.stops.length, 'пересадка', 'пересадки', 'пересадок')}`}</div>
            <div className="card__info-body">{segmentOut.stops.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
