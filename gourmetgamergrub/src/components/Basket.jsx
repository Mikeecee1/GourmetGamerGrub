//  holds the data for items in shopping list(using Order.jsx) and displays total cost
import './BasketStyles.css'

function Basket(props){
    //vars & functions
    
    
    //html
    return(
        <div className='order'>
        <h4>Your Order</h4>
        {/* //map function to display order items */}
       
        <div className='scrollItems'>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub-Total</th>
                </tr>
            </thead>
            <tbody>
        {props.basketItems.map((item) =>{
           
            return(
            <><tr><td>{item.name}</td><td>{item.price}</td><td>{item.quantity}</td><td>{item.quantity*item.price}</td></tr></>
            )
        }
        )}
           </tbody>
           </div>
          <div className='footer'>
            <h4 className='showTotal'>Order Total:  £{props.totalVal}</h4>
            <button className='checkOut' onClick=''>CheckOut</button>
          </div>
        </div>
        ) 
    }

    export default Basket
