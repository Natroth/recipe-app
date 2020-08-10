import React from 'react';
import knifes from './assets/images/knifes.png'

const Description = (props) => {
    if (!props.thisValue) {
        return (
            
            <p className="description">
            Don't know what to cook? Got a fridge full of ingredients?
            <br/>
            Search up a list of what you've got and find delicious recipes at the click of a button
            <br/><br/>
            Already got something in mind?
            <br/>
            Write in the name of your dish, and find some inspiration
           
            <img src={knifes} class="desc-knifes" />
            </p>

        )
    }
    else {
        return(
            <p></p>
        )
    }
}

export default Description;