import React, { Component } from 'react';
import Card from './Card';

const styles = {
  display: 'inline-block',
  width:'250px',
  transform: 'rotate(-4deg)',
  WebkitTransform: 'rotate(-4deg)'
};

export default class CardDragPreview extends Component {

  render() {
    return (
      <div style={styles}>
      <Card card={this.props}/>
      </div>
    );
  }
}
