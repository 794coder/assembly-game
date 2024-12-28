import { useEffect, useState } from "react"
import Card from "./Card"

export default function App(){
    const[coffee,setCoffee]=useState([])
    const coffeeCard=coffee.map(item=>{
        return(
            <Card
            key={item.id}
            name={item.name}
            image={item.image}
            available={item.available}
            popular={item.popular}
            price={item.price}
            rating={item.rating}
            votes={item.votes}
            />
        )
    })
    useEffect(()=>{
        fetch( "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json")
        .then(res=>res.json())
        .then(data=>setCoffee(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <>
            <main>
                <section className="intro-section">
                    <h1 className="main-heading">Our Collection</h1>
                    <p className="intro-text">
                        Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                    </p>
                    <span className="intro-buttons">
                        <button>All Products</button>
                        <button>Available Now</button>
                    </span>
                </section>
                <section className="products-section">
                    {coffeeCard}
                </section>
            </main>
        </>
    )
}
