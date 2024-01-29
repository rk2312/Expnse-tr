import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
const Balance = () => {
    const {transactions }=useContext(GlobalContext);
//    var total = 0;
// for (var i=0; i<transactions.length; i++){
//   total += transactions[i].amount;
// }
const amounts = transactions.map(transaction => transaction.amount);
  console.log ( amounts);
  var total = amounts.reduce((acc, item) => (acc += item), 0);
  if(total<0)
  {
      total=0;
  }
 
console.log(total);
  return (
    <>
       <h3>Your Account Balance is:-${total}</h3>
    </>
  )
}

export default Balance;
