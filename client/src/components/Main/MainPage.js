import React,{Fragment} from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import Pusher from 'pusher-js';
import img5 from '../../images/img5.jpg';
import NavBar from '../NavBar/NavBar';
import PlayerInfo from '../GameContainer/PlayerInfo';
import RoomInfo from '../GameContainer/RoomInfo';
import Container from '../GameContainer/Container';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;	  
    background-image: url(${img5});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;


class MainPage extends React.Component{
	constructor(props){
		super(props);
	
		this.pusher = new Pusher('3269dc0d034164676ca2', {
			 cluster: 'us2'
		});

		this.state = {
			user:{
				username:"",
				uuid:"",
			},
			room:{
				title:"",
				description:"",
			},
			players:[],
		}
	}


	componentDidMount() {
		const token=localStorage.getItem('mud-token');

		if(!token) {
			this.props.history.replace('/login');
		}

		this.gameStart(token);
	}


	gameStart=(token) => {
		
		axios.get('https://multi-user-game.herokuapp.com/api/adv/init',
		{
			headers:{
				"Authorization": `Token ${token}`,	
			}
		})
		.then(res=>{
			const user={username: res.data.name, uuid: res.data.uuid}
			const room={title: res.data.title, description: res.data.description}
			const players=res.data.players;

			this.setState({user:user, room:room, players:players});
		})

		.catch(error=>{
			console.log('Could get any data back');	
		
		});
	
	}

	
	render(){
		return(
			<div>
			<GlobalStyle />
			
			<NavBar username={this.state.user.username} />
			<Container user={this.state.user} room={this.state.room}/>
			</div>
			);

	}

}

export default MainPage;
