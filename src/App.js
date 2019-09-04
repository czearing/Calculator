import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
//import "./function.js";

function applyMath(operand1, operator, operand2) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
  }
}
function useCalculator() {
  const [displayValue, setDisplayValue] = React.useState("");
  const [operand, setOperand] = React.useState(null);
  const [operator, setOperator] = React.useState(null);

  const onClick = ev => {
    const { className, value } = ev.target;

    if (className === "number") {
      setDisplayValue(displayValue + value);
    } else if (className === "decimal") {
      if (displayValue.indexOf(".") < 0) {
        setDisplayValue(displayValue + value);
      }
    } else if (className.indexOf("operator") >= 0) {
      const newOperand = operator
        ? applyMath(operand, operator, Number(displayValue))
        : Number(displayValue);
      console.log(newOperand, value);

      if (value === "=") {
        setOperand(null);
        setOperator(null);
        setDisplayValue(newOperand);
      } else {
        setOperand(newOperand);
        setOperator(ev.target.value);
        setDisplayValue("");
      }
    } else if (className === "all-clear") {
      setOperand(null);
      setOperator(null);
      setDisplayValue("");
    }
  };

  return {
    displayValue,
    onClick
  };
}

function App() {
  const { displayValue, onClick } = useCalculator();

  return (
    <div className="App">
      <div className="calculator">
        <input
          type="text"
          className="calculator-screen"
          value={displayValue}
          disabled
        />

        <div className="calculator-keys" onClick={onClick}>
          <button type="button" className="operator" value="+">
            +
          </button>
          <button type="button" className="operator" value="-">
            -
          </button>
          <button type="button" className="operator" value="*">
            &times;
          </button>
          <button type="button" className="operator" value="/">
            &divide;
          </button>

          <button type="button" className="number" value="7">
            7
          </button>
          <button type="button" className="number" value="8">
            8
          </button>
          <button type="button" className="number" value="9">
            9
          </button>

          <button type="button" className="number" value="4">
            4
          </button>
          <button type="button" className="number" value="5">
            5
          </button>
          <button type="button" className="number" value="6">
            6
          </button>

          <button type="button" className="number" value="1">
            1
          </button>
          <button type="button" className="number" value="2">
            2
          </button>
          <button type="button" className="number" value="3">
            3
          </button>

          <button type="button" className="number" value="0">
            0
          </button>
          <button type="button" className="decimal" value=".">
            .
          </button>
          <button type="button" className="all-clear" value="all-clear">
            AC
          </button>

          <button type="button" className="equal-sign operator" value="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
