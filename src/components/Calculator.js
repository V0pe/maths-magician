// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import './Calculator.css';
import Calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.eventClick = this.eventClick.bind(this);
  }

  eventClick(e) {
    this.setState((state) => ({
      ...state,
      ...Calculate(state, e.target.name),
    }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <main>
        <div id="result" className="item result">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="item reset" name="AC" onClick={this.eventClick}> AC </button>
        <button type="button" className="item order" name="+/-" onClick={this.eventClick}> +/- </button>
        <button type="button" className="item percent" name="%" onClick={this.eventClick}> % </button>
        <button type="button" className="item divide" name="÷" onClick={this.eventClick}> / </button>
        <button type="button" className="item no-7" name="7" onClick={this.eventClick}> 7 </button>
        <button type="button" className="item no-8" name="8" onClick={this.eventClick}> 8  </button>
        <button type="button" className="item no-9" name="9" onClick={this.eventClick}> 9 </button>
        <button type="button" className="item multiply" name="x" onClick={this.eventClick}> X </button>
        <button type="button" className="item no-4" name="4" onClick={this.eventClick}> 4 </button>
        <button type="button" className="item no-5" name="5" onClick={this.eventClick}> 5 </button>
        <button type="button" className="item no-6" name="6" onClick={this.eventClick}> 6 </button>
        <button type="button" className="item substract" name="-" onClick={this.eventClick}> - </button>
        <button type="button" className="item no-1" name="1" onClick={this.eventClick}> 1 </button>
        <button type="button" className="item no-2" name="2" onClick={this.eventClick}> 2 </button>
        <button type="button" className="item no-3" name="3" onClick={this.eventClick}> 3 </button>
        <button type="button" className="item add" name="+" onClick={this.eventClick}> + </button>
        <button type="button" className="item no-0" name="0" onClick={this.eventClick}> 0 </button>
        <button type="button" className="item dot" name="." onClick={this.eventClick}> . </button>
        <button type="button" className="item equal" name="=" onClick={this.eventClick}> =  </button>

      </main>
    );
  }
}

export default Calculator;
