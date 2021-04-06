import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'

import {calculateSumAction} from '../../redux/action';

import './calculator.styles.css'


const Calculator = () => {

  const dispatch = useDispatch();

  const sumData = useSelector(state => state.sumData);
  const {sum, error} = sumData; 

  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(10);
  const [result, setResult] = useState('');


  const calculateSum = (e) => {
    e.preventDefault();
    dispatch(calculateSumAction(Number(num1), Number(num2)));
    setResult(sum)
    
  }

  


  return (
    <div className="calculator-wrapper">
      <div className="form-box" onSubmit={calculateSum}>
        <h2 className="form-title">Enter the numbers</h2>
        <form>
            <input 
            type="number" 
            placeholder="number 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            />
            <input 
            type="number" 
            placeholder="number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            />
            <button type="submit">Sum</button>
        </form>
      </div>

      <div className="result-box">
        <h2 className="result-title">Result</h2>
        {
          error && 'There is Error'
        }
        <input 
            type="number" 
            placeholder="Result"
            value={result}
            readOnly={true}
            />
      </div>
    </div>

  );
};

export default Calculator;