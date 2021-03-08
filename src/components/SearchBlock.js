import logo from './logo.svg';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Блок поиска
 */
export default class SearchBlock extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <div className="SearchBlock">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="Search-form" action="https://yandex.ru/search/" role="search">
          <input className="Search-input" val=""/>
          <button typ="submit">Поиск</button>
          {/* {<script nonce="">try{document.currentScript.previousElementSibling.focus()}catch(e){}</script>} */}
        </form>
        {this.props.children}
      </div>
    )
  }
}
