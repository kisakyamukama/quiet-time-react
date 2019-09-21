import  React, { Component } from  'react';
import axios from 'axios';

export default class Create extends Component {

	constructor(props){
		super(props);
		this.onchangeTitle = this.onchangeTitle.bind(this);
		this.onchangeDevotion = this.onchangeDevotion.bind(this);
		this.onchangeAuthor = this.onchangeAuthor.bind(this);
		this.onSubmit = this.onsubmit.bind(this);

		this.state = {
			title: '',
			devotion: '',
			author: ''
		};
	}

	onChangeTitle(e){
		this.state({
			title: e.target.value
		});
	}
	onChangeDevotion(e){
		this.state({
			devotion: e.target.value
		});
	}
	onChangeAuthor(e){
		this.state({
			author: e.target.value
		});
	}


	onSubmit = (e) => {
		e.preventDefault();

		const obj = {
			title: this.state.title,
			devotion: this.state.devotion,
			author: this.state.author	
			
		}
		console.log(obj)
		axios.post('/api/devotion', obj)
		.then(res => console.log(res.data));

		// const { id, title,body,author } = this.state

		// axios.post('/api/devotion', { id, title, body, author})
		// .then((result) => {
		// this.props.history.push("/")
	});
	}

	render() {
		const { id, title, author, body} = this.state;
		return (
			<div class="container">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">
							ADD DEVOTION
						</h3>
					</div>


				</div>

			</div>

		);
		}
}
