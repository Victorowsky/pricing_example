import "./Heading.css"
import Switch from "./Switch/Switch"
const Heading = () => {
    return ( 
        <div className="heading">
            <h1>Our Pricing</h1>
            <div className="switch_Container">
                <span>Annualy</span>
                <Switch/>
                <span>Monthly</span>
            </div>
        </div>
     );
}
 
export default Heading;