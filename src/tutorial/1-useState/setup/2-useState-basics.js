import React, { useState } from 'react';

/*
hooks always start with use
component name must be uppercase
must be in the function/component body
cannot call conditionally

*/

const UseStateBasics = () => {
  /*
  console.log(useState('hello world'));
  const value = useState(1)[0];
  const handler = useState(1)[1];
  console.log(value, handler);
  */
  const [text, setText] = useState('Random title');
  const handlerClick = () => {
    if (text === 'Random title') setText('puppie');
    else setText('Random title');

  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handlerClick}>change</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
