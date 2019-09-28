import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Devotion extends Component {

  render() {
    const { id,title, author, body} = this.props.devotion;
      return (
        <section className="section">
          <div className="container">

          <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                <p className="card-text">{body}</p>
                <Link to={"/edit-devotion/"+id} className="card-link">Edit</Link>
                <Link to={'/'} className="card-link">Share</Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="media mb-4 d-md-flex d-block element-aminate">
                  {/* <img  /> */}
                </div>

              </div>
            </div>

          </div>
        </section>

      )
  }
}


Devotion.propTypes ={
  devotion:PropTypes.object.isRequired,
  delDevotion:PropTypes.func.isRequired
}
