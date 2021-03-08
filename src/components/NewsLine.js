import React from 'react';
import PropTypes from 'prop-types';
import Container from './Container';

/**
 * Новостная лента
 * параметр: content array
 */
export default class NewsLine extends React.Component {
  static propTypes = {
    content: PropTypes.array,
    children: PropTypes.node
  }
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <div className="NewsLine">
        {this.props.content.map(
          o => <NewsLineItem 
            key={o.key}
            icon={o.icon}
            mediaTitle={o.mediaTitle}
            text={o.text}
            url={o.url}
          />
        )}
        {this.props.children}
      </div>
    )
  }
}
/**
 * Элемент новостной ленты
 */
class NewsLineItem extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    mediaTitle: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string
  }
  constructor(props) {
    super(props);
  }
  render()  {
    return (
      <Container class="NewsLineItem">
        <Container class="NewsLineItemIcon" typ="img" href={this.props.icon} alt={this.props.mediaTitle}/>
        <Container class="NewsLineItemText" typ="a" href={this.props.url}>{this.props.text}</Container>
      </Container>
    )
  }
}
