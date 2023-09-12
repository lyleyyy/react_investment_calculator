import React, { useState } from "react";
import Header from "./components/Header/Header";
import CalculateForm from "./components/CalculateForm/CalculateForm";
import Result from "./components/Result/Result";

function App(props) {
  let [calculateResult, setCalculateResult] = useState([]);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    const yearlyData = []; // per-year results

    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlyContribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    // do something with yearlyData ...
    setCalculateResult(yearlyData);
    // console.log(yearlyData);
  };

  const resetHandler = () => {
    setCalculateResult([]);
  };

  return (
    <div>
      <Header />
      <CalculateForm
        onClickCal={calculateHandler}
        onClickReset={resetHandler}
      />
      {calculateResult.length > 0 ? (
        <Result calculateResult={calculateResult} />
      ) : (
        <p className="ptag">Input and Calculate to Get Your Result!</p>
      )}
    </div>
  );
}

export default App;
