//  holds the data for items in shopping list(using Order.jsx) and displays total cost
import './BasketStyles.css'

function Basket(props){
    //vars & functions
    const setStyle = props.toggle
    const divStyle1 = {
        height: '18vh',
        fontSize: 'x-small'
    }
    const divStyle2 = {
        height: '48vh',
        fontSize: 'small'
    }
    
    
    //html
    return(
        <div className='order'>
        {/* <h4>Your Order</h4> */}
        {/* //map function to display order items */}
       
            <h4>Your Order</h4>
           
         <div className='scrollItems'   style={setStyle ? {...divStyle1}: {...divStyle2 }}>
            <thead>
                <tr>
                    <th id='headDescript'>Item</th>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th >Sub Total</th>
                </tr>
            </thead>
            <tbody>
        { props.basketItems.length > 0 ?
        props.basketItems.map((item) =>{
           
            return(
            <><tr><td id='itemDescript'>{item.name}</td><td>{item.price.toFixed(2)}</td><td>{item.quantity}</td><td>{(item.quantity*item.price).toFixed(2)}</td></tr></>
            )
        }
        )
        :
        <h2>Add Items To Your Basket</h2>
        }
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
