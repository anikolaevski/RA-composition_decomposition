import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

const play="https://www.flaticon.com/svg/vstatic/svg/686/686463.svg?token=exp=1615235189~hmac=23a134665334939bef6410a5d99ffb31";

/**
 * Блок "Эфир"
 */
export default class TVLiveBlock extends React.Component {
  static propTypes = {
    program: PropTypes.string,
    tag: PropTypes.string,
    href: PropTypes.string,
  }
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <Container class="Basement-column-content" typ="a" href={this.props.href}>
        <Container class="play-icon" typ="img" href={play}/>
        <Container class="Basement-column-bold-text">{this.props.program}</Container>
        <Container class="Basement-column-reg-text">{this.props.tag}</Container>
      </Container>
    )
  }
}

