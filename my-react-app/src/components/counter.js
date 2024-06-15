import React ,{useState} from 'react';
function Counter(){
    //  hooks > useState
    var [count ,setCount]=useState(0);
    return(
        <>
        <h1>you clicked this button {count} </h1>
        <button onClick={()=>{
            setCount(count+1)
        }}>click</button>
        </>
    )
}

export default Counter;