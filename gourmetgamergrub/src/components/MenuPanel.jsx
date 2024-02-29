// will contain menu/ categories and items in each category when toggled
import './MenuPanelStyles.css'
function MenuPanel(){
//vars & functions


//html
return(
    <div className='FoodItemComp'>
        <img src='' onClick=''></img>
        <div className='FoodItemText'>
            <h1>FoodItem Title</h1>  
            <p>Item Description....</p>
        </div>
        <div className='FoodItemButtons'>
            <button id='AddItem' onClick=''>+</button>
            <button id='RemoveItem' onClick=''>-</button>
        </div>
    </div>
)

}

export default MenuPanel