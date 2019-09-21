import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Show extends Component {

	constructor(props) {
		super(props);
		this.state  = {
			devotion: {}
		};
	}

	componentDidMount() {
		axios.get('/api/devotion/'+ this.props.match.params.id)
		.then(res => {
			this.setState({ devotion: res.data });
			console.log(this.state.devotion);
		}).catch(function(error){
			console.log(error);
		});
	}

	componentDidUpdate(){
		axios.get('/api/devotion/'+ this.props.match.params.id)
		.then(res => {
			this.setState({ devotion: res.data });
			console.log(this.state.devotion);
		}).catch(function(error){
			console.log(error);
		});
	}

	delete(id) {
		console.log(id);
		axios.delete('/api/devotion/'+id)
		.then((result) => {
			this.props.history.push("/")
		});
	}

	render() {
		return(
			<div class="container">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">
							{ this.state.devotion.title }
						</h3>
					</div>
					<div class="card" style="width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="card-link">Card link</a>
							<a href="#" class="card-link">Another link</a>
						</div>
						</div>
					<div class="panel-body">
						<h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Devotion list</Link></h4>
						<dl class="panel-body">
							<dt>ID</dt>
							<dd>{this.state.devotion.id}</dd>
							<dt>Author</dt>
							<dd>{this.state.devotion.author}</dd>
							<dt>Body</dt>
							<dd>{this.state.devotion.body}</dd>

						</dl>
						<Link to ={`/edit/${this.state.devotion.id}`} class="btn btn-success">Edit</Link>&nbsp;
						<button onClick={this.delete.bind(this, this.state.devotion.id)} class="btn btn-danger">Delete</button>

					</div>
				</div>
			</div>
		);
 }
}

export default Show;