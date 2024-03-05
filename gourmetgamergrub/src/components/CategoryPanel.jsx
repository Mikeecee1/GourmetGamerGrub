import imgArray from '../images/images'
import './CategoryPanelStyles.css'

function CategoryPanel(props){
    //functions here



    //html
    return(
        <div className='categories'>
            <img id='cat1' onClick={props.menuItems} src={imgArray[0]}/>
            <img id='cat2' onClick={props.menuItems} src={imgArray[1]}/>
            <img id='cat2' onClick={props.menuItems} src={imgArray[2]}/>
            <img id='cat2' onClick={props.menuItems} src={imgArray[3]}/>

        </div>
    )
}
export default CategoryPanel