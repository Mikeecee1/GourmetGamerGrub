//  holds the data for items in shopping list(using Order.jsx) and displays total cost
import './BasketStyles.css'

function Basket(props){
    //vars & functions
    // const checkOut = props.toggle;
    
    
    
    //html
    return(
        <div className='order'>
        {/* <h4>Your Order</h4> */}
        {/* //map function to display order items */}
       
            <h4>Your Order</h4>
           
        <div className='scrollItems' style={{height: props.toggle ?  '18vh': '48vh'}}>
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
            <h4 className='showTotal'>Order Total:  £{props.totalVal.toFixed(2)}</h4>
            { props.toggle ?
            <button id='checkOut' onClick={props.coButton} >CheckOut</button>
            :
            <button id='endOrder' onClick={props.endOrder}>Complete Order</button>
            }
          </div>
        </div>
        ) 
    }

    export default Basket
