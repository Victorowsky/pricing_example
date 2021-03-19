import { useState } from 'react';
import "./App.css";
import React from 'react';
import Heading from "./comp/Heading/Heading";
import Offer from './comp/Offer/Offer';

export const StateContext = React.createContext(null)

function App() {

  const [isChecked, setIsChecked] = useState(false)


	return (
    <StateContext.Provider value={{isChecked, setIsChecked}}>
      <div className="app">
        <Heading/>
        <Offer/>
      </div>
    </StateContext.Provider>
 
  )

}

export default App;
