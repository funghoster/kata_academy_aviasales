import { Col, Row } from 'antd'

import logo from '@/logo.svg'

import Transplants from '../transplants'
import '../../styles/style.scss'
import FlightList from '../flight-list'
import FlightFilters from '../flight-filters'

function App() {
  return (
    <Row>
      <Col lg={{ span: 20, offset: 2 }} xxl={{ span: 16, offset: 4 }} className="wrapper">
        <Row justify="center">
          <img src={logo} alt="logo" className="aviasales__logo"></img>
        </Row>
        <div className="aviasales__wrapper">
          <Transplants />
          <div className="aviasales__body">
            <FlightFilters />
            <FlightList />
            <button className="aviasales__next">Показать еще 5 билетов!</button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default App
