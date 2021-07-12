import React from 'react';
import Row from "./row";



let Box = [0,1,2,3,4,5,6,7];
const black = {
    backgroundColor: "black",
    
};
const white = {
    backgroundColor: "white",
    
};



function Cards(){
    return(
        <>
            {Box.map(i => (
                i%2===0 ?<Row style={white} /> : <Row style={black} />
            ))}
            

        </>
        
        )
}
export default Cards;