import React from 'react'

const Card = () => {
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__price">13 400 Р </div>
        <div className="card__logo"></div>
      </div>
      <div className="card__body">
        <div className="card__info">
          <div className="card__time">
            <div className="card__info-header">MOW – HKT</div>
            <div className="card__info-body">10:45 – 08:00</div>
          </div>
          <div className="card__way">
            <div className="card__info-header">В пути</div>
            <div className="card__info-body">21ч 15м</div>
          </div>
          <div className="card__change">
            <div className="card__info-header">2 пересадки</div>
            <div className="card__info-body">HKG, JNB</div>
          </div>
        </div>
        <div className="card__info">
          <div className="card__time">
            <div className="card__info-header">MOW – HKT</div>
            <div className="card__info-body">10:45 – 08:00</div>
          </div>
          <div className="card__way">
            <div className="card__info-header">В пути</div>
            <div className="card__info-body">21ч 15м</div>
          </div>
          <div className="card__change">
            <div className="card__info-header">2 пересадки</div>
            <div className="card__info-body">HKG, JNB</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
