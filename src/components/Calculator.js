// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import './Calculator.css';

class Calculator extends React.PureComponent {
  render() {
    return (
      <main>
        <div className="item result"> 0 </div>
        <button type="button" className="item reset" name='AC'> AC </button>
        <button type="button" className="item order" name='+/-'> +/- </button>
        <button type="button" className="item percent" name='%'> % </button>
        <button type="button" className="item divide" name='÷'> / </button>
        <button type="button" className="item no-7" name='7'> 7 </button>
        <button type="button" className="item no-8" name='8'> 8  </button>
        <button type="button" className="item no-9" name='9'> 9 </button>
        <button type="button" className="item multiply" name='x'> X </button>
        <button type="button" className="item no-4" name='4'> 4 </button>
        <button type="button" className="item no-5" name='5'> 5 </button>
        <button type="button" className="item no-6" name='6'> 6 </button>
        <button type="button" className="item substract" name="-"> - </button>
        <button type="button" className="item no-1" name='1'> 1 </button>
        <button type="button" className="item no-2" name='2'> 2 </button>
        <button type="button" className="item no-3" name='3'> 3 </button>
        <button type="button" className="item add" name='+'> + </button>
        <button type="button" className="item no-0" name='0'> 0 </button>
        <button type="button" className="item dot" name='.'> . </button>
        <button type="button" className="item equal" name='='> =  </button>

      </main>
    );
  }
}

export default Calculator;
