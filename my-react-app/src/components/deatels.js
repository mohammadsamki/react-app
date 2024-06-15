import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Deatels(){
    const navigate = useNavigate();
    const location = useLocation();
    const x = location.state
    console.log('this is the state ',x)
    if(x )
{
    console.log('thers is x')
}   
else{
    console.log('there is no x')
} // var query = new URLSearchParams(location.search)
    // console.log(query.get('spendDatef'))
    return (
        <div>
            <button onClick={()=>{
                navigate('/table')
            }}>back</button>
            <div>
                {x ? (
                    <>
                    <h1>thisx is deatels</h1>
                    <h1>{x.name}</h1>
                    <h1>{x.amount}</h1>
                    <h1>{x.spendDate}</h1>
                    <h1>{x.category}</h1>
                    </>
                ): (<h1>there is no data</h1>)}
                
                
            
                </div>

        </div>
    )
}

export default Deatels;