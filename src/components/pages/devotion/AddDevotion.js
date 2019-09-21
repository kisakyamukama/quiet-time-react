import React, { Component }from 'react';
import { timingSafeEqual } from 'crypto';
import Footer from '../../layout/Footer';
import axios from 'axios';

export default class AddDevotion extends Component {
  state = { 
    title: '',
    body: '',
    author: '',
    published: false,
    date: new Date()
  }

  onChange = (e) => this.setState({
    [e.target.name]:e.target.value
  });

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.addDevotion(this.state.title, this.state.body, this.state.author, this.state.date);
    axios.post('http://localhost:8080/api/devotion',{
      title: this.state.title,
      body:this.state.body,
      author:this.state.author,
      date:this.state.date,
      published: false
    })
    this.setState({ title: '', body: '', author:'', date: '', published: ''})
    this.props.history.push('/');
    
  }
  render() {
      return (
          <div>
              <form onSubmit={ this.onSubmit }>
                <input 
                  type="text"
                  name="title"
                  className ="form-control"
                  placeholder="Devotion title"
                  value={ this.state.title }
                  onChange= { this.onChange }
                  required 
                />
                <br />

                <textarea 
                  type="text"
                  name="body"
                  className ="form-control"
                  placeholder="Devotion content"
                  value={ this.state.body }
                  onChange= { this.onChange }
                  rows="20"
                  required
                />
                <br />
                <input 
                  type="text"
                  name="author"
                  className ="form-control"
                  placeholder="Author Name"
                  value={ this.state.authorr}
                  onChange= { this.onChange }
                  required
                />
                {/* <br />
                <div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio"  name="publish" onChange={this.onChange} className="custom-control-input"/>
                    <label className="custom-control-label">Do not publish yet</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input type="radio" name="publish" onChange={this.onChange}  className="custom-control-input" />
                    <label className="custom-control-label">Publish</label>
                  </div>
                </div> */}
                <br />
                <input 
                type="submit"
                className="btn btn-success form-control"
                value="submit"
                />
                <br />
              </form>
          </div>

      )
  }
}
