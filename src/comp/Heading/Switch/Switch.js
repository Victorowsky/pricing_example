import './Switch.css'
import {StateContext} from "../../../App"
import { useContext } from 'react'
const Switch = () => {

    const {isChecked, setIsChecked} = useContext(StateContext)

    const dotStyleChecked = {
	 transform:' translateX(35px)'
    }

    return ( 
        <div className="switch" onClick={()=> setIsChecked(prev=>!prev)}>
            <div className="dot" style={isChecked ? dotStyleChecked : {}}></div>
        </div>
     );
}
 
export default Switch;