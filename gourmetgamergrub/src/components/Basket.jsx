//  holds the data for items in shopping list(using Order.jsx) and displays total cost
import './BasketStyles.css'

function Basket(props){
    //vars & functions
    
    
    //html
    return(
        <div className='order'>
        <h1>Your Order</h1>
        {/* //map function to display order items */}
        <h2>Order Total:  £{() => props.totalVal()}</h2>
        {() => props.basketItems.map((item) =>{
            console.log( 'ID: ', item.id, 'Item: ', item.name, 'Price: ', item.price, 'Quantity: ', item.quantity)
        }
        )}
        </div>
    )
    
    }

    export default Basket
