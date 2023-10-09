import { useState } from 'react'

import checkBoxStyle from './transplants.module.scss'

const Transplants = () => {
  const [transplants, setTransplants] = useState({
    all: false,
    transfer: {
      nonStop: false,
      oneTransfer: false,
      twoTransfer: false,
      threeTransfer: false,
    },
  })

  const setChecked = (name) => {
    switch (name) {
      case 'all':
        console.log('all')
        setTransplants((trans) => {
          return {
            all: !trans.all,
            transfer: {
              nonStop: !trans.all,
              oneTransfer: !trans.all,
              twoTransfer: !trans.all,
              threeTransfer: !trans.all,
            },
          }
        })
        break
      case 'nonStop':
        console.log('nonStop')
        setTransplants((trans) => {
          return { ...trans, transfer: { ...trans.transfer, nonStop: !trans.transfer.nonStop } }
        })
        break
      case 'oneTransfer':
        console.log('oneTransfer')
        setTransplants((trans) => {
          return { ...trans, transfer: { ...trans.transfer, oneTransfer: !trans.transfer.oneTransfer } }
        })
        break
      case 'twoTransfer':
        console.log('twoTransfer')
        setTransplants((trans) => {
          return { ...trans, transfer: { ...trans.transfer, twoTransfer: !trans.transfer.twoTransfer } }
        })
        break
      case 'threeTransfer':
        console.log('threeTransfer')
        setTransplants((trans) => {
          return { ...trans, transfer: { ...trans.transfer, threeTransfer: !trans.transfer.threeTransfer } }
        })
        break
    }
  }
  return (
    <div className="change">
      <h2 className="change__title">Количество пересадок</h2>
      <ul>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={transplants.all}
            type="checkbox"
            id="all"
            name="all"
            value="all"
            onChange={(e) => setChecked(e.currentTarget.value)}
          />
          <label htmlFor="all">Все</label>
        </li>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={transplants.transfer.nonStop}
            type="checkbox"
            id="nonStop"
            name="nonStop"
            value="nonStop"
            onChange={(e) => setChecked(e.currentTarget.value)}
          />
          <label htmlFor="nonStop">Без пересадок</label>
        </li>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={transplants.transfer.oneTransfer}
            type="checkbox"
            id="oneTransfer"
            name="oneTransfer"
            value="oneTransfer"
            onChange={(e) => setChecked(e.currentTarget.value)}
          />
          <label htmlFor="oneTransfer">1 пересадка</label>
        </li>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={transplants.transfer.twoTransfer}
            type="checkbox"
            id="twoTransfer"
            name="twoTransfer"
            value="twoTransfer"
            onChange={(e) => setChecked(e.currentTarget.value)}
          />
          <label htmlFor="twoTransfer">2 пересадки</label>
        </li>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={transplants.transfer.threeTransfer}
            type="checkbox"
            id="threeTransfer"
            name="threeTransfer"
            value="threeTransfer"
            onChange={(e) => setChecked(e.currentTarget.value)}
          />
          <label htmlFor="threeTransfer">3 пересадки</label>
        </li>
      </ul>
    </div>
  )
}

export default Transplants
