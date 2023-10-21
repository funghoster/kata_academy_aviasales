import { useDispatch, useSelector } from 'react-redux'

import { toggleAll, toggleFilter } from '../../stores/filterSlice'

import checkBoxStyle from './transplants.module.scss'

const Transplants = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)

  const handleAllChange = ({ target: { checked } }) => {
    dispatch(toggleAll(checked))
  }

  const handleFilterChange = ({ target: { name, checked } }) => {
    dispatch(toggleFilter({ filterName: name, checked }))
  }
  return (
    <div className="change">
      <h2 className="change__title">Количество пересадок</h2>
      <ul>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={filters.all}
            type="checkbox"
            id="all"
            name="all"
            value="all"
            onChange={handleAllChange}
          />
          <label htmlFor="all">Все</label>
        </li>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={filters.other.nonStop}
            type="checkbox"
            id="nonStop"
            name="nonStop"
            value="nonStop"
            onChange={handleFilterChange}
          />
          <label htmlFor="nonStop">Без пересадок</label>
        </li>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={filters.other.oneTransfer}
            type="checkbox"
            id="oneTransfer"
            name="oneTransfer"
            value="oneTransfer"
            onChange={handleFilterChange}
          />
          <label htmlFor="oneTransfer">1 пересадка</label>
        </li>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={filters.other.twoTransfer}
            type="checkbox"
            id="twoTransfer"
            name="twoTransfer"
            value="twoTransfer"
            onChange={handleFilterChange}
          />
          <label htmlFor="twoTransfer">2 пересадки</label>
        </li>
        <li>
          <input
            className={checkBoxStyle.checkbox}
            checked={filters.other.threeTransfer}
            type="checkbox"
            id="threeTransfer"
            name="threeTransfer"
            value="threeTransfer"
            onChange={handleFilterChange}
          />
          <label htmlFor="threeTransfer">3 пересадки</label>
        </li>
      </ul>
    </div>
  )
}

export default Transplants
