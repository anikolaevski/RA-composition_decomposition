import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

/**
 * Горизонтальный tab. Контент передается в атрибуте content(array)
 * Элементы: key any, text string, selected boolean
 * Также допустимы children
 */
export default class TopTab1 extends React.Component {
  static propTypes = {
    content: PropTypes.array.isRequired,
    class: PropTypes.string,
    children: PropTypes.node
  }
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <Container class={this.props.class}>
        {this.props.content.map(
          o => <Container key={o.key} typ="a" href="#" class={`${(o.selected?"SelectedBlue":"JustBlue")}`}>{o.text}</Container>
        )}
        {this.props.children}
      </Container>
      
    )
  }
}
