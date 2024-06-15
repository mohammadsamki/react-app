import '../style/table.css'

import React ,{useEffect, useState} from 'react';

import { useNavigate } from 'react-router-dom';

function TableWithState (){
    //  JSON
    const [items,setItems] =useState([
        {id: 1, name: 'name1', amount: 100, spendDate: '2021-01-01', category: 'category1'},
        {id: 2, name: 'name2', amount: 100, spendDate: '2021-01-01', category: 'category2'},
        {id: 3, name: 'name3', amount: 100, spendDate: '2021-01-01', category: 'category3'},
        {id: 4, name: 'name4', amount: 100, spendDate: '2021-01-01', category: 'category4'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
        {id: 5, name: 'name5', amount: 100, spendDate: '2021-01-01', category: 'category5'},
    
    ]) 
    const navigate = useNavigate();
    var seeDeatels = (item)=>{
        console.log(item)
        // var query = new URLSearchParams(item)
        // console.log(query)
        // navigate(`/details?${query}`)
        navigate('/details',{state:item})
    }
    var deleteItem=(index)=>{
        items.splice(index,1)
        alert('item is deleted')
    }
    var updateDate=(index)=>{
        console.log(index)
        items[index].id=6
        setItems([...items]) // take the old array and add the new item to it // state
        
    }
    var addItem=()=>{
        var newItem ={id: 6, name: 'name6', amount: 200, spendDate: '2021-01-01', category: 'category6'}
        items.push(newItem)
        console.log(items)
        setItems([...items]) // take the old array and add the new item to it // state hooks 
    }
     var listItems = items.map(item=>(
        <tr className='bord'>
            <td className='bord'>{item.id}</td>
            <td className='bord'>{item.name}</td>
            <td className='bord'>{item.amount}</td>
            <td className='bord'>{item.spendDate}</td>
            <td className='bord'>{item.category}</td>
            <td className='bord'><button onClick={()=>{
                seeDeatels(item)
            }}>more info</button></td>
              <td className='bord'><button onClick={()=>{
                updateDate(items.indexOf(item))
            }}>update info</button></td>
              <td className='bord'><button onClick={()=>{
                // seeDeatels(item)
                deleteItem(items.indexOf(item))
            }}>delete info</button></td>
        </tr>
    ))
    useEffect(()=>{
        // alert('it fitch the data')
        console.log('it fitch the data')
    },[items])
 
    return (
        <div>
            <form>
                <input type='number' placeholder='id' name='id' />
                <input type='text' placeholder='name' name='name' />
                <input type='text' placeholder='amount' name='amount'/>
                <input type='text' placeholder='spendDate' name='spendDate' />
                <input type='text' placeholder='category' name='category'/>
                <button>submit</button>
            </form>
            <button onClick={()=>{
                addItem()
            }}
            >add item</button>
            <table>
                <thead className='bord'>
                    <tr className='bord'>
                        <th className='bord'>id</th>
                        <th className='bord'>name</th>
                        <th className='bord'>amount</th>
                        <th className='bord'>spendDate</th>
                        <th className='bord'>category</th>
                        <th className='bord'>more info</th>
                        <th className='bord'>update info</th>
                        <th className='bord'>delete info</th>
                    </tr>
                </thead>
                <tbody className='bord'>
                  {listItems}
                </tbody>
            </table>
        </div>
    );
}
export default TableWithState;