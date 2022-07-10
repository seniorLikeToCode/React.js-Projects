import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState(
    { id: 1, name: 'john', age: '69', message: 'random message' },
    { id: 2, name: 'peter', age: '69', message: 'random message' },
    { id: 3, name: 'susan', age: '69', message: 'random message' },
    { id: 4, name: 'anna', age: '69', message: 'random message' })
  console.log(person);

  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('Random Message');

  const changeMessage = () => {
    // setPerson({ ...person, message: 'hello world' });
    if (message === 'Random Message' || person === 'Hello World') setMessage('sexxy');
    else setMessage('Hello World');
  }
  return (
    <>
      <h3>{person.id}</h3>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>Change message</button>
    </>
  );
};

export default UseStateObject;
