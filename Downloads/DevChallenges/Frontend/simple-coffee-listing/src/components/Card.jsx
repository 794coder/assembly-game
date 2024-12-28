/* eslint-disable react/prop-types */

import emptyStar from "/src/images/Star.svg"
import filledStar from "/src/images/Star_fill.svg"

export default function Card (props){
    const votes=props.votes>0?props.votes:"No ";
    const rating=props.rating>0?props.rating:"No rating";
    const star=props.rating>0?filledStar:emptyStar;
    return(
        <div className="product-card">
            <div className="img-card">
            <img src={props.image} alt="coffee cup" />
            {props.popular&&<div className="popular">
                popular
            </div>}
            </div>
            <span className="name-and-price"><h4>{props.name}</h4><p>{props.price}</p></span>
            <span className="rating">
            <img src={star} alt="" />
            <h4>{rating}</h4> 
           { rating>0&&<p>({votes} votes)</p> }
            <p className="sold">{props.available===false?"Sold Out":null}</p>
            </span>
        </div>
    )
}