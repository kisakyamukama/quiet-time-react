import React, { Component } from 'react';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import axios from 'axios';

// components
import Header from './components/layout/Header';
// import Slider from './components/layout/Slider';
import Devotions from './components/pages/devotion/Devotions';
import AddDevotion from './components/pages/devotion/AddDevotion';
import EditDevotion from './components/pages/devotion/EditDevotion';
import About from './components/pages/About';
import Feedback from './components/pages/FeedBack';
import Footer from './components/layout/Footer';
import AddBookLesson from './components/pages/lessons/lessonsFromBooksRead/AddBookLesson';
import AddChurchLesson from  './components/pages/lessons/ChurchLesson';
import ShowChurchLessons  from './components/pages/lessons/ShowChurchLessons';
import Register from './components/pages/user/Register';
import Login from './components/pages/user/Login';

export default class App extends Component {

      state = {
        devotions: []
      }

      //  Retrieve devotions
      componentDidMount() {
        axios.get('http://localhost:8080/api/devotion', {
        headers:{"Content-Type": "application/json" }
      }).then(response => {
        console.log(response);
           this.setState({ devotions: response.data});
        })
        .catch(function(error) {
          console.log(error);
        })
      }

      componentDidUpdate(){
        axios.get('http://localhost:8080/api/devotion', {
          headers:{"Content-Type": "application/json" }
        }).then(response => {
          // console.log(response);
             this.setState({ devotions: response.data});
          })
          .catch(function(error) {
            console.log(error);
          })

      }

      //delete devotion
      delDevotion = (id) => {
        axios.delete(`http://localhost:8080/api/devotion/${id}`)
        .then(res => this.setState({ devotions: [...this.state.devotions.filter(devotion => devotion.id !== id )]
        }));
      }


      render() {
        return (
          <Router>
              <div className="App">
              <Header />
            { /* <Slider /> */}
                <div className="container min-vh-100" >

                  <Route exact path ="/" render= { props => (
                    <React.Fragment>
                       <Devotions  devotions = { this.state.devotions } delDevotion={this.delDevotion}/>
                    </React.Fragment>
                  )}
                  />
                  <Route exact path="/add-devotion" component={AddDevotion} />
                  <Route exact path="/edit-devotion/:id" component={EditDevotion} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/feedback" component={Feedback} />
                  <Route exact path="/addBookLesson" component={AddBookLesson} />
                  <Route exact  path="/addChurchLesson" component={AddChurchLesson} />
                  <Route exact path="/churchLessons" component={ShowChurchLessons } />
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />

                </div>
                <Footer />

            </div>
          </Router>
        )
      }
}
