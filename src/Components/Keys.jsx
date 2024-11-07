import React from 'react';

const Keys = ({ label, keyClass, operClass1, operClass2, operClass3, operClass4, operClass5, operClass6, operClass7, onButtonClick }) => {

  const equalClass = 'col-[span_2] bg-[#94A3B8] text-[#1a261a] font-semibold hover:bg-[#1a222afd] text-white';
  const operatClass1 = 'bg-[#94A3B8] text-[#1a261a] font-semibold hover:bg-[#1a222afd] text-white';
  const operatClass2 = 'bg-[#94A3B8] text-[#1a261a] font-semibold hover:bg-[#1a222afd] text-white';
  const operatClass3 = 'bg-[#94A3B8] text-[#1a261a] font-semibold hover:bg-[#1a222afd] text-white';
  const operatClass4 = 'bg-[#94A3B8] text-[#1a261a] font-semibold hover:bg-[#1a222afd] text-white';
  const operatClass5 = 'bg-[#94A3B8] text-[#1a261a] font-semibold hover:bg-[#1a222afd] text-white';
  const operatClass6 = 'bg-[#4d6587] text-[#1a261a] font-semibold hover:bg-[#1a222afd] text-white';
  const operatClass7 = 'bg-[#4d6587] text-[#1a261a] font-semibold hover:bg-[#1a222afd] text-white';

  
  return <div className={`bg-[#141414] text-[2.1rem] font-serif flex cursor-pointer items-center justify-center p-4 rounded-[5px] hover:bg-[#28333efd] 
    ${keyClass && equalClass}  ${operClass1 && operatClass1} ${operClass2 && operatClass2} ${operClass3 && operatClass3} ${operClass4 && operatClass4} 
    ${operClass5 && operatClass5} ${operClass6 && operatClass6} ${operClass7 && operatClass7}`} 
    onClick={() => onButtonClick(label)}>
      {label}
      </div>;
};

export default Keys;