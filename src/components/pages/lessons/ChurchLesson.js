import React, { Component }from 'react';
import axios from 'axios';

export default class AddDevotion extends Component {
  state = { 
    theme: '',
    lesons: '',
    author: ''
  }

  onChange = (e) => this.setState({
    [e.target.name]:e.target.value
  });

  onSubmit = (e) => {
    e.preventDefault(); 
    axios.post('http://localhost:8080/api/lesson/church',{
      theme: this.state.theme,
      lessons:this.state.lessons,
      author:this.state.author
    })
    this.setState({ theme: '', lessons: '', author:''})
    this.props.history.push('/churchLessons');
    
  }
  render() {
      return (
          <div>
              <form onSubmit={ this.onSubmit }>
                <input 
                  type="text"
                  name="theme"
                  className ="form-control"
                  placeholder="Theme"
                  value={ this.state.theme }
                  onChange= { this.onChange }
                  required 
                />
                <br />

                <textarea 
                  type="text"
                  name="lessons"
                  className ="form-control"
                  placeholder="Lessons from church service"
                  value={ this.state.lessons }
                  onChange= { this.onChange }
                  rows="20"
                  required
                />
                <br />
                <input 
                  type="text"
                  name="author"
                  className ="form-control"
                  placeholder="Submitted by"
                  value={ this.state.author}
                  onChange= { this.onChange }
                  required
                />
                <br />
                <input 
                type="submit"
                className="btn btn-success form-control"
                value="Save lessons learnt from church"
                />
                <br />
              </form>
          </div>

      )
  }
}
