
//import './CategoryPanelStyles.css'

function CategoryPanel(props){
    //functions here

    //html
    return(
        <div className='categories' onClick={props.selectedMenu}>
            <div className='categories-content'>
                <img id='image1' src={props.catImage[0]} alt={`${props.menuName} food 1`}/>
                <h2>{props.menuName}</h2>
                <img id='image2' src={props.catImage[1]} alt={`${props.menuName} food 2`}/>
            </div>
        </div>
    )
}
export default CategoryPanel