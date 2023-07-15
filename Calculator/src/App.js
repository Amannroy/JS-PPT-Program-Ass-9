import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [previousValue, setPreviousValue] = useState(null);

  const handleNumberClick = (number) => {
    if (displayValue === '0') {
      setDisplayValue(number);
    } else {
      setDisplayValue((prevDisplay) => prevDisplay + number);
    }
  };

  const handleOperatorClick = (op) => {
    if (operator) {
      calculateResult();
    }
    setOperator(op);
    setPreviousValue(displayValue);
    setDisplayValue('0');
  };

  const calculateResult = () => {
    const current = parseFloat(displayValue);
    const previous = parseFloat(previousValue);
    let computedResult;

    switch (operator) {
      case '+':
        computedResult = previous + current;
        break;
      case '-':
        computedResult = previous - current;
        break;
      case '*':
        computedResult = previous * current;
        break;
      case '/':
        computedResult = previous / current;
        break;
      default:
        return;
    }

    setDisplayValue(computedResult.toString());
    setOperator(null);
    setPreviousValue(null);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setOperator(null);
    setPreviousValue(null);
  };

  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="button-row">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button className="operator" onClick={() => handleOperatorClick('+')}>
            +
          </button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button className="operator" onClick={() => handleOperatorClick('-')}>
            -
          </button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button className="operator" onClick={() => handleOperatorClick('*')}>
            *
          </button>
        </div>
        <div className="button-row">
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={() => handleClearClick()}>C</button>
          <button onClick={() => calculateResult()} className="equal">
            =
          </button>
          <button className="operator" onClick={() => handleOperatorClick('/')}>
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
