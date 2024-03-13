//  holds the data for items in shopping list(using Order.jsx) and displays total cost
import './BasketStyles.css'

function Basket(props){
    //vars & functions
    
    
    //html
    return(
        <div className='order'>
        <h4>Your Order</h4>
        {/* //map function to display order items */}
        <p> Item:       Price:       Quantity: </p>
        {props.basketItems.map((item) =>{
            //  {console.log(basketItems)}
            return(
            <p>{item.name}      {item.price}      {item.quantity}</p>
            )
        }
        )}
        <h4>Order Total:  £{props.totalVal}</h4>
        </div>
        ) 
    }

    export default Basket
