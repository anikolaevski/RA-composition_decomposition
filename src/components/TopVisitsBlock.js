import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

/**
 * Блок "Посещаемое"
 */
export default class TopVisitsBlock extends React.Component {
  static propTypes = {
    key: PropTypes.string,
    topic: PropTypes.string,
    desc: PropTypes.string,
    href: PropTypes.string,
  }
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <Container key={this.props.key} class="Basement-column-content" typ="a" href={this.props.href}>
        <Container class="Basement-column-bold-text">{this.props.topic}</Container>
        <Container class="Basement-column-reg-text">{this.props.desc}</Container>
      </Container>
    )
  }
}
