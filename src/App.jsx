import { useState } from "react"
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

export default function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 12000,
    expectedReturn: 15000,
    duration: 5
});

const validInput = userInput.duration > 0;

function inputHandler(Inputidentifier, newValue){
    setUserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [Inputidentifier]: +newValue
        }
    });
}

  return (
    <div>
      <Header /> 
      <UserInput userInput={userInput} onChangeInput={inputHandler}/>
      {!validInput && 
      <p className="center">Please enter a valida duration which should be greater than zero
        </p>}
      {validInput && <Results input={userInput}/>}
    </div>
  )
}

