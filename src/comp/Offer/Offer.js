import PriceTab from "../PriceTab/PriceTab"
import "./Offer.css"
import {StateContext} from '../../App'
import { useContext } from "react"
const Offer = () => {

    const {isChecked} = useContext(StateContext)

    return ( 
        <div className="offer">
            <PriceTab type={'Basic'} price={isChecked ? '19.99'  : '199.99'} option1={'500GB Storage'}
            option2={'2 Users Allowed'} option3={'Send up to 3GB'}
            />
            <PriceTab purple={true} type={'Proffesional'} price={isChecked ? '24.99' :'249.99'} option1={'1 TB Storage'}
            option2={'5 Users Allowed'} option3={'Send up to 10 GB'}
            />
            <PriceTab type={'Master'} price={isChecked ? '39.99':'399.99'} option1={'2 TB Storage'}
            option2={'10 Users Allowed'} option3={'Send up to 20 GB'}
            />
        </div>
     );
}
 
export default Offer;