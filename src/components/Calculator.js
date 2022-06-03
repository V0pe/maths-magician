import React, { useState } from 'react';
import './Calculator.css';
import Calculate from '../logic/calculate';

const Calculator = () => {
  const [result, setResult] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const eventClick = (e) => {
    setResult((result) => ({
      ...result,
      ...Calculate(result, e.target.name),
    }));
  };

  const { total, next, operation } = result;

  return (
    <main>
      <div data-testid="result" className="item result">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" className="item reset" name="AC" data-testid="AC" onClick={eventClick}>AC</button>
      <button type="button" className="item order" name="+/-" data-testid="+/-" onClick={eventClick}>+/-</button>
      <button type="button" className="item percent" name="%" data-testid="%" onClick={eventClick}>%</button>
      <button type="button" className="item divide" name="÷" data-testid="/" onClick={eventClick}>/</button>
      <button type="button" className="item no-7" name="7" data-testid="no-7" onClick={eventClick}>7</button>
      <button type="button" className="item no-8" name="8" data-testid="no-8" onClick={eventClick}>8</button>
      <button type="button" className="item no-9" name="9" data-testid="no-9" onClick={eventClick}>9</button>
      <button type="button" className="item multiply" name="x" data-testid="X" onClick={eventClick}>X</button>
      <button type="button" className="item no-4" name="4" data-testid="no-4" onClick={eventClick}>4</button>
      <button type="button" className="item no-5" name="5" data-testid="no-5" onClick={eventClick}>5</button>
      <button type="button" className="item no-6" name="6" data-testid="no-6" onClick={eventClick}>6</button>
      <button type="button" className="item substract" name="-" data-testid="-" onClick={eventClick}> - </button>
      <button type="button" className="item no-1" name="1" data-testid="no-1" onClick={eventClick}>1</button>
      <button type="button" className="item no-2" name="2" data-testid="no-2" onClick={eventClick}>2</button>
      <button type="button" className="item no-3" name="3" data-testid="no-3" onClick={eventClick}>3</button>
      <button type="button" className="item add" name="+" data-testid="+" onClick={eventClick}>+</button>
      <button type="button" className="item no-0" name="0" data-testid="0" onClick={eventClick}>0</button>
      <button type="button" className="item dot" name="." data-testid="." onClick={eventClick}>.</button>
      <button type="button" className="item equal" name="=" data-testid="=" onClick={eventClick}>= </button>

    </main>
  );
};

export default Calculator;
