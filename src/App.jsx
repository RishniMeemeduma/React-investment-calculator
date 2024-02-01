import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import InvestmentTable from "./components/InvestmentTable";

import { useState } from "react";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment:1000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
  });

  const inputIsValid = userInputs.duration >= 1
  function handleChange(userInputIdentifier, newValue) {
    setUserInputs(prevUserInput => {
        return {
            ...prevUserInput,
            [userInputIdentifier] : newValue
        }
    });
  }

  return (
    <>
      <Header />
      <UserInputs handleChange={handleChange} userInputs={userInputs} />
      {!inputIsValid && <p className="center">Please Enter duration grater than 0</p>}
      {inputIsValid && <InvestmentTable inputs={userInputs}/> }
    </>
  )
}

export default App
