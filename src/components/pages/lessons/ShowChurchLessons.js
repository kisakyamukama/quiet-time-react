import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class ShowChurchLessons extends Component {

     state = {
         clessons : []
     }
     //  Retrieve devotions      
     componentDidMount() {
        axios.get('http://localhost:8080/api/lesson/church', {
        headers:{"Content-Type": "application/json" }
      }).then(response => {
          console.log(response.data);
           this.setState({ clessons: response.data});
        })
        .catch(function(error) {
          console.log(error);
        })
      }

      componentDidUpdate(){
        axios.get('http://localhost:8080/api/lesson/church', {
          headers:{"Content-Type": "application/json" }
        }).then(response => {
             this.setState({ clessons: response.data});
          })
          .catch(function(error) {
            console.log(error);
          })

      }


  render() {
      console.log(this.state.clessons)
    // const { id,theme, author, lessons } = this.state;
      return (
        <div className="card mb-4">
            
              <div className="card-body">
                <h5 className="card-title">{this.state.clessons.theme}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.state.clessons.author}</h6>
                <p className="card-text">{this.state.clessons.lessons}</p>
                <Link to={"/edit-devotion/"+this.state.clessons.id} className="card-link">Edit</Link>
                <Link to={'/'} className="card-link">Share</Link>
              </div>
            </div>
       
      )
  }
}

