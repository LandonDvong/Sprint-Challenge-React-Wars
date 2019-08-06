import React from 'react';
import styled from "styled-components";


const Info = styled.h2`
color: red;
background-color: gold;
border: 2px solid black;
width: 400px;
display: flex;
`

const PeopleCard = props => {
    return (
        <>
            <div>
                <Info>name: {props.name} </Info>
                <Info>mass: {props.mass} </Info>
            </div>
            <div>
                <Info>height: {props.height}</Info>
                <Info>hair_color: {props.hair_color}</Info>
            </div>
        </>    
    );
};

export default PeopleCard;
