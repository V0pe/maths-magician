// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <main>
        <div className="item result"> 0 </div>
        <div className="item reset"> AC </div>
        <div className="item order"> +/- </div>
        <div className="item percent"> % </div>
        <div className="item divide"> / </div>
        <div className="item no-7"> 7 </div>
        <div className="item no-8"> 8  </div>
        <div className="item no-9"> 9 </div>
        <div className="item multiply"> X </div>
        <div className="item no-4"> 4 </div>
        <div className="item no-5"> 5 </div>
        <div className="item no-6"> 6 </div>
        <div className="item substract"> -  </div>
        <div className="item no-1"> 1 </div>
        <div className="item no-2"> 2 </div>
        <div className="item no-3"> 3 </div>
        <div className="item add"> + </div>
        <div className="item no-0"> 0 </div>
        <div className="item dot"> . </div>
        <div className="item equal"> =  </div>

      </main>
    );
  }
}

export default Calculator;
