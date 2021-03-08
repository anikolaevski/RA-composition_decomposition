import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';


/**
 * Блок курсов валют
 */
export default class CurrencyRatesBlock extends React.Component {
  static propTypes = {
    CurrencyRates: PropTypes.array,
    children: PropTypes.node
  }
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <Container class="CurrencyRatesBlock">
        {this.props.CurrencyRates.map(
          o => <CurrencyRate
            key={o.symbol}
            symbol={o.symbol}
            rate={o.rate}
            trend={o.trend}
          >
          </CurrencyRate>
        )}
        {this.props.children}
      </Container>
    )
  }
}

/**
 * Блок курса одной валюты
 */
 class CurrencyRate extends React.Component {
  static propTypes = {
    symbol: PropTypes.string,
    rate: PropTypes.string,
    trend: PropTypes.string,
  }
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <Container class="CurrencyRate">
        <Container class="Currency-symbol" typ="span">{this.props.symbol}</Container>
        <Container class="Currency-rate" typ="span">{this.props.rate}</Container>
        <Container class="Currency-trend" typ="span">{this.props.trend}</Container>
      </Container>
    )
  }
}
