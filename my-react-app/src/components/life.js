import React,{Component} from "react";

class LifecycleDemo extends Component {
    //  property (attributes)
    constructor(props){
        super(props);
        this.state = {
            data: null,
            loading:true
        }
        console.log('constructor')
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount');
        this.fetchData();
    }
    fetchData(){
        setTimeout(()=>{
            this.setState({
                data: [{id:1,name:'name1'},{id:2,name:'name2'},{id:3,name:'name3'}],
                loading:false
            });
            console.log('it fitch the data')
        },2000)
    }
    renderTable(tableData){
        return(
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>
                </thead>
            
            <tbody>
                    {tableData.map(item=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
               </tbody>   
               </table>
             
        )
    }
    
    render(){
        console.log('render')
        const {data,loading} = this.state;
        return(
            <>
            <h1>lifecycle demo</h1>
           
            {loading ? <tbody>loading ....</tbody>: <h1>{this.renderTable(data)}</h1>}
            </>
        )
    }
}

export default LifecycleDemo;