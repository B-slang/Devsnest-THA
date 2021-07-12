import React from 'react';
import '../styles/box.css';
import Calorie from "./list";

var arr = [
    {
        food : "wada pav ",
        calorie : "128"
    },
    {
        food : "misal pav ",
        calorie : "130"
    },
    {
        food : "kanda bhajji pav ",
        calorie : "150"
    },
    {
        food : "fried rice ",
        calorie : "90"
    },
    {
        food : "bhaav ",
        calorie : "500"
    }
];

function Calories(){
    return(
        <>
            <div className="container">
                <div className="mainbox">
                    {arr.map(val => (
                        <Calorie food={val.food} calorie={val.calorie} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Calories;