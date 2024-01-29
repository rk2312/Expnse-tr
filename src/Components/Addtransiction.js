import React ,{useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
const Addtransiction = () => {
    const [text,setText]=useState();
    const [amount,setAm]=useState();
    const {AddTransaction}=useContext(GlobalContext);
    function onsubmit(e)
    {
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*1000000),
            text,
            amount:+amount
        }
        AddTransaction(newTransaction);
    }
function handlesubmit(e){
   e.preventDefault();
   setText(" ");
   setAm(" ");
}
  return (
    <div>
        
            <h3>Add  new Transiction</h3>
            <form  onSubmit={onsubmit}>
             <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter item... "  onfocus="this.value=''" />
            
             </div>
              <div  className="form-control">
                <label htmlFor="amount">
                    Amount <br/>
                    (negative-expense,positive-income)
                </label>
                <input type="number"value={amount} onChange={(e)=>setAm(e.target.value)}  placeholder="enter amount..."  onfocus="this.value=''"/>
              </div>
              <button className="btn">Add Transaction</button>
              <button className='btn' onClick={handlesubmit}>Clear</button>
            </form>
       
    </div>
  )
}

export default Addtransiction
