import React, { Component }from 'react';
import PropTypes from 'prop-types';
import Devotion from './Devotion';

export default class Devotions extends Component {
  render() {
      return  this.props.devotions.map((devotion) => (
          <Devotion key={devotion.id} devotion={devotion} delDevotion={this.props.delDevotion} />
      ));   
  }
}

Devotions.propTypes ={
    devotions:PropTypes.array.isRequired,
    delDevotion:PropTypes.func.isRequired

  }
  
