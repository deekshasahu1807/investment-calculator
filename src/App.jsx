import { useState } from 'react';
import investmentCalculatorLogo from './assets/investment-calculator-logo.png';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Result from './components/Result';

function App() {

  console.log("App component rendered");

  const [userInput, setUserInput] = useState({ 
    initialInvestment: 10000, 
    annualInvestment: 1200, 
    expectedReturn: 6, 
    duration: 10 
  });

  const inputIsValid = userInput.duration >= 1;
  
  function handleUserInput(id, newValue) {
    console.log(id, newValue);
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [id]: +newValue,
      }
    });
  }

  return (
    <>
      <Header heading="React Investment Calculator" image={investmentCalculatorLogo} />
      <UserInput userInput={userInput} onChangeInput={handleUserInput} />
      {inputIsValid ? <Result userInput={userInput} /> : <p className="center error">Please enter a valid duration (at least 1 year).</p>}
    </>
  );
}

export default App;
