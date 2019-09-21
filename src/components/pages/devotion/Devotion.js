import React, { Component }from 'react';
import PropTypes from 'prop-types';

export default class Devotion extends Component {

  devotionStyling = () =>  {
    return{
      backgroundColor: this.props.published ?  'green':'yellow'
    }
  }
  render() {
    const { id, title, author, body, published } = this.props.devotion;
      return (
        <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                <p className="card-text">{body}</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>
          // <div style={this.devotionStyling()}>           

          //   <h3>{title}</h3>
          //   <p>{body}</p>
          //    <p>
          //      Published: <i>{published}</i>
          //    </p>
          //   <b>{author}</b>
          //   <button className="btn btn-danger " style={btnStyle} onClick={this.props.delDevotion.bind(this, id)}>x</button>
            
          //    <hr />
          // </div>
      )
  }
}

const btnStyle = {
  float: 'right',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor:'pointer'

}

Devotion.propTypes ={
  devotion:PropTypes.object.isRequired,
  delDevotion:PropTypes.func.isRequired
}
