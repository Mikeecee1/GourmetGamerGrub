
import './CategoryPanelStyles.css'

function CategoryPanel(props){
    //functions here

    

    //html
    return(
        <div className='categories' onClick={props.selectedMenu}>
           
            
                <img id='image1'  src={props.catImage[0]}/>
                <img id='image2'  src={props.catImage[1]}/>
                <h2>{props.menuName}</h2>
                

                
        
        </div>
    )
}
export default CategoryPanel