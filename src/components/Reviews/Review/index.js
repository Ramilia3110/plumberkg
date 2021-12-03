import React,{useState} from 'react';
import reviews from "./../../../data";
import {BsFillChatSquareQuoteFill} from "react-icons/bs";
import {MdSkipPrevious, MdSkipNext} from "react-icons/md";
import "./../styles.scss"
const Review = () => {
    const [index, setIndex] =useState(0);
    const {name, job, image, text} = reviews[index];
 
    const checkNumber = (number) => {
        if (number > reviews.length - 1) {
            return 0;
        }
        if (number < 0){
           return reviews.length-1 
        }
        return number
    }

    const nextPerson = () => {
        setIndex( (index) => {
            let newIndex = index +1 ;
            return checkNumber(newIndex)
        })
    }

    const  prevPerson = () => {
        setIndex((index) => {
            let newIndex = index -1;
            return checkNumber(newIndex);
        })
    }

    
    return (
        <div className="review">
            <div className ="img-container">
                <img src ={image} alt={name} className="person-img"/>
                <span className="quote-icon">
                   <BsFillChatSquareQuoteFill/>
                </span>
            </div>
         <h4 className ="author"> {name} </h4> 
         <p className = "job" > {job} </p>
         <p className = "info"> {text} </p>

         <div className="button-container">
             <button className ="prev-btn" onClick={prevPerson}><MdSkipPrevious/> </button>
             <button className= "next-btn" onClick= {nextPerson}> <MdSkipNext/> </button>
         </div>

        </div>
    )
}

export default Review
