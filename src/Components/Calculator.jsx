import React, {useState} from 'react';
import Keys from './Keys';

const Calculator = () => {
  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "=",
  ];

  const [showResult, setShowResult] = useState(false);
  const [display, setDisplay] = useState('');

  const maxLimit = 12;


  function calculatorResult(){
    if(display.length !== 0) {
      try {
        let calcResult = eval(display);
        calcResult = parseFloat(calcResult.toFixed(3));
        setDisplay(calcResult);
        setShowResult(true);
      } catch (error) {
        setDisplay("Error");
      }
    } else setDisplay("");
  }

  
  function handleButton(value){
    setShowResult(false);
    if (value === "AC") setDisplay("");
    else if(value === "C") setDisplay(display.slice(0, -1));
    else if(isOperator(value)){
      if (display == "" || isOperator(display[display.length - 1])) return;
      setDisplay(display + value);
    }
    else if(value === '=') calculatorResult();
    else if (display.length >= maxLimit)
      alert(`Maximum characters allowed : ${maxLimit}`);
    else setDisplay(display + value);
  }


  function isOperator(char) {
    return ["*", "/", "%"].includes(char);
  }


  const operationClass = "text-[2.7rem] tracking-[2px] flex gap-[5px] items-center text-[rgba(255, 255, 255, 0,5)] justify-end";
  const resultClass = "text-[3.7rem]";


  return (
     <div className='min-w-[400px] bg-black flex flex-col gap-4 p-4 rounded-2xl shadow-md'>
        <div className='overflow-x-auto bg-[#292727] min-h-[130px] flex
          items-end justify-end flex-col p-4 rounded-[10px]'>
          <div className={`${showResult ? resultClass : operationClass}`}>
            {display}
          </div>
        </div>

        <div className='grid grid-cols-[repeat(4,1fr)] gap-[0.3rem]'>
          {keys.map((item, index) => (
            <Keys label={item} 
            key={index} 
            keyClass={item === '=' && 'equals'}
            operClass1={item === '+' && 'equals'}
            operClass2={item === '-' && 'equals'}
            operClass3={item === '*' && 'equals'}
            operClass4={item === '/' && 'equals'}  
            operClass5={item === '%' && 'equals'}  
            operClass6={item === 'C' && 'equals'}  
            operClass7={item === 'AC' && 'equals'}  
            onButtonClick = {handleButton}
            />
          ))}
        </div>
    </div>
  );
};

export default Calculator;