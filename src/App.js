import React, { Component } from 'react';

const foodILike = [
    {
        name: "Kimchi",
        image: "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/02/238f0a3e8b567db1229b0f27220033341.jpg"
    },
    {
        name: "Ramen",
        image: "http://news.pulmuone.kr/webfile/webedit/20180312/20180312110147_%EC%9D%BC%EB%B3%B8%EB%8F%88%EC%BD%94%EC%B8%A0.jpg"
    },
    {
        name: "Kimbap",
        image: "http://recipe1.ezmember.co.kr/cache/recipe/2016/03/08/0b0c25963c8be47cbdbdc02718849ae11.jpg"
    }
]

function Food({ name, picture }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <img src={picture} />
        </div>
    );
}

class App extends Component {
    render() {
        return (
            <div>
                {foodILike.map(dish => (
                    <Food name={dish.name} picture={dish.image} />
                ))}
            </div>
        );
    }
}

export default App;
