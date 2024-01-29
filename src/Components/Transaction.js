import React ,{useContext}from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({transaction}) => {
    const {deleteTransaction}=useContext(GlobalContext);
    const sign=transaction.amount<0?'-':'+';
    const amou=transaction.amount;

//console.log(transaction.id);
  return (
    
       <li className= {amou<0?'minus':'plus'}>
               {transaction.text} <span>{sign}$ {Math.abs(transaction.amount)}</span>
             <button  onClick={()=>deleteTransaction(transaction.id)} className="delete-btn" >delete</button>
            </li> 
  )
}
 
export default Transaction
