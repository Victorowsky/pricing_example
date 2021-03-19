import "./PriceTab.css"
const PriceTab = ({type,price,option1,option2,option3, purple}) => {
    return ( 
        <>

        {purple ?  
        <div className="priceTab_Purple">
            <div className="type_Purple">{type}</div>
            <div className="price">
                <span className="dollar">$</span>
                {price}</div>
            <div className="option_Purple">{option1}</div>
            <div className="option_Purple">{option2}</div>
            <div className="option_Purple last_option">{option3}</div>
            <div className="learn_Button_Purple">LEARN MORE</div>
        </div> 
        :
          <div className="priceTab">
            <div className="type">{type}</div>
            <div className="price">
                <span className="dollar">$</span>
                {price}</div>
            <div className="option">{option1}</div>
            <div className="option">{option2}</div>
            <div className="option last_option">{option3}</div>
            <div className="learn_Button">LEARN MORE</div>
        </div>}
       
        </>
     );
}
 
export default PriceTab;