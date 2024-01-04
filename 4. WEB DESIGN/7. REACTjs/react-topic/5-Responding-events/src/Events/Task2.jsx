import React from 'react';

const Solution = () => {
  const box = [
    { button1:"setValues", button2:"ResetValues", button3:"NowValues", button4:"NowVAluesIsReset" }
  ]

  const prop = (item) => {
    const chng = {
      button1: item.button1,
      button2: item.button2,
      button3: item.button3,
      button4: item.button4,
    };
    return chng;
  };

  const elements = box.map((item, index) => {
    const chng = prop(item);
    return <div key={index}>Element: {chng.button1}</div>;
  });

  return <div>{elements}</div>;
};

export default Solution;





