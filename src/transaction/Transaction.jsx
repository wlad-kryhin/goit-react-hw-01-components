import PropTypes from 'prop-types';

export default function Transaction ({items}){
    return (<table class="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody>
        {items.map(({id,type,amount,currency}) =>{
            return(
             <tr key={id}>
             <td>{type}</td>
             <td>{amount}</td>
             <td>{currency}</td>
           </tr>
        )})}
    </tbody>
  </table>)
}
Transaction.propTypes ={
    items: PropTypes.array,
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
}