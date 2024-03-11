// will contain menu/ categories and items in each category when toggled
import './FoodItemPanelStyles.css'
function FoodItemPanel(props){
//vars & functions


//html
return(
    <div className='FoodItemComp'>
        <img src={props.foodImage} ></img>
        <div className='FoodItemText'>
            <h1>{props.foodName}</h1>  
            <p id='desc'>{props.foodDesc}</p>
        </div>
        <div className='FoodItemButtons'>
            <button id='AddItem' onClick={() => props.add}>+</button>
            <button id='RemoveItem' onClick={() => props.remove}>-</button>
        </div>
    </div>
)

}

export default FoodItemPanel