//navigation for menu panel
//import './NavigationStyles.css'

function Navigation(props){
//functions

//html
return(
   <div className='navBar'>
       <button  onClick={props.navClick}>{props.navName}</button>
   </div>

)
}

export default Navigation;