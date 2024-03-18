//  holds the data for items in shopping list(using Order.jsx) and displays total cost
import './BasketStyles.css'

function Basket(props){
    //vars & functions
    
    
    //html
    return(
        <div className='order'>
        {/* <h4>Your Order</h4> */}
        {/* //map function to display order items */}
       
            <h4>Your Order</h4>
           
        <div className='scrollItems'>
            <thead>
                <tr>
                    <th id='headDescript'>Item</th>
                    <th>Item £     </th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                </tr>
            </thead>
            <tbody>
        {props.basketItems.map((item) =>{
           
            return(
            <><tr><td id='itemDescript'>{item.name}</td><td>{item.price.toFixed(2)}</td><td>{item.quantity}</td><td>{(item.quantity*item.price).toFixed(2)}</td></tr></>
            )
        }
        )}
           </tbody>
           </div>
          <div className='footer'>
            <h4 className='showTotal'>Order Total:  £{props.totalVal}</h4>
            <button id='checkOut' onClick=''>CheckOut</button>
          </div>
        </div>
        ) 
    }

    export default Basket
