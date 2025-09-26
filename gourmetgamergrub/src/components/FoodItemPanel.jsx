// will contain menu/ categories and items in each category when toggled
import './FoodItemPanelStyles.css'

function FoodItemPanel(props){
    //vars & functions

    //html
    return(
        <div className='FoodItemComp'>
            <img src={props.foodImage} alt={props.foodName}></img>
            
            <div className='FoodItemText'>
                <h1>{props.foodName}</h1>
                <p id='desc'>{props.foodDesc}</p>
                <p>£{props.foodPrice.toFixed(2)}</p>
            </div>
            
            <div className='FoodItemButtons'>
                <button id='AddItem' onClick={props.addItem} aria-label={`Add ${props.foodName} to basket`}>+</button>
                <button id='RemoveItem' onClick={props.removeItem} aria-label={`Remove ${props.foodName} from basket`}>-</button>
            </div>
        </div>
    )
}

export default FoodItemPanel