import React, { Component } from 'react';
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image: "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/02/238f0a3e8b567db1229b0f27220033341.jpg",
        rating: 4.8
    },
    {
        id: 2,
        name: "Ramen",
        image: "http://news.pulmuone.kr/webfile/webedit/20180312/20180312110147_%EC%9D%BC%EB%B3%B8%EB%8F%88%EC%BD%94%EC%B8%A0.jpg",
        rating: 5.0
    },
    {
        id: 3,
        name: "Kimbap",
        image: "http://recipe1.ezmember.co.kr/cache/recipe/2016/03/08/0b0c25963c8be47cbdbdc02718849ae11.jpg",
        rating: 4.9
    }
]

function Food({ name, picture, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
}

class App extends Component {
    render() {
        return (
            <div>
                {foodILike.map(dish => (
                    <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
                ))}
            </div>
        );
    }
}

export default App;
