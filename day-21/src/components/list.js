import React,{ useState } from 'react';
import "../styles/list.css";


const Calorie = ( props ) => {
    console.log(props.food,props.calorie)
    const [foodi,setFoodi] = useState(props.food);
    const [caloriei,setCaloriei] = useState(props.calorie);
    

    const [val1,setVal1] = useState("");
    const [val2,setVal2] = useState("");
   
    const [val3,setVal3] = useState("");
    
    
    const Editcal = () => 
            setVal3(1)
        

    const Calupdate = () => {
        return(
            <>
                <div className="editbox">
                <form>
                    <input ref={input => input && input.focus()} className="editfood" type="text" value={val1} onChange={(e) =>{
                     
                        setVal1(e.target.value)
                    }} />
                    <input className="editcalorie"  type="number" value={val2} onChange={(el) => {
                    
                        setVal2(el.target.value)
                    }} />
                    <button onClick={(e) => {
                        e.preventDefault();
                        setFoodi(val1);
                        setCaloriei(val2);
                        setVal3(0);
                    }}>done</button>
                </form>
                </div>
            </>
         
         
            )
    }
    
     return(
        <>
            <div>
             
                {val3 === 1 ? <Calupdate /> : <div className="box"> <div className="food">{foodi}</div>
                <div className="desc">You have consumed <strong>{caloriei}</strong> calories today</div>
                <button onClick={()=>props.Delcal(props.id)}>Delete</button>
                <button onClick={Editcal}>Edit</button></div> }
               
          
                
            </div>
        </>
        )
    
}
export default Calorie;