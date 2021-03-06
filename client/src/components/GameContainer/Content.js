import React,{Fragment} from 'react';
import styled from 'styled-components';


const ContentStyle = styled.div`
        width: 100%; //650px;
        background: #fff;
        opacity: 0.5;
        border: 1px solid black;
	border-radius: 10px;
        font: 25px;
        margin-top: 60px;
	-webkit-backface-visibility: hidden;
	-webkit-transform: translate3d(0, 0, 0);

`

const Text=styled.div`
	color: red;
	margin-bottom: 10px;
`

const Description =styled.p`
	color: #FF4500;

`

const CommandText =styled.p`
	color: green;

`
const Message =styled.p`
        color: red;

`

const Content = (props) => {
    return (
            <Fragment>
	    <ContentStyle>
	    
	    <CommandText>List of Commnads You Can Use:</CommandText>
	    <CommandText>move n to move north</CommandText>
	    <CommandText>move s to move south</CommandText>
	    <CommandText>move e to move east</CommandText>
	    <CommandText>move w to move west</CommandText>
	    <CommandText>say [your message] to broadcast the message to other players in your room</CommandText>
	    <CommandText>whisper [player name] [your message] to send a private message to another player</CommandText>
	    <CommandText>shout [your message] to send a  message to all the players in the game</CommandText>
	    <Description>{props.room.description}</Description>
	    <Fragment>
	    {props.error.length===0 ? (null) :(<Text>{props.error}</Text>)}
	    </Fragment>
	    <Fragment>
            {props.broadcast.length===0 ? (null) :(
		     <Text>
		    {props.broadcast.map((message, index)=>{
		    	return(
				<Message key={index}>{message}</Message>
			)
		    })}</Text>)}
            </Fragment>
	    </ContentStyle>
	    </Fragment>
    );
}

export default Content;
