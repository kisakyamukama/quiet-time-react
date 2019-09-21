import React, { Component }from 'react';
import PropTypes from 'prop-types';

export default class Devotion extends Component {

  devotionStyling = () =>  {
    return{
      backgroundColor: this.props.published ?  'green':'yellow'
    }
  }
  render() {
    const { title, author, body} = this.props.devotion;
      return (
        <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                <p className="card-text">{body}</p>
                <a href="#" className="card-link">Comment</a>
                <a href="#" className="card-link">Share</a>
              </div>
            </div>
       
      )
  }
}


Devotion.propTypes ={
  devotion:PropTypes.object.isRequired,
  delDevotion:PropTypes.func.isRequired
}
