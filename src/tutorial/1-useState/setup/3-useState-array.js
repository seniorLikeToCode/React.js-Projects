import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const handlerOnClick = () => {
    if (people.length === 0) return setPeople(data);
    else return setPeople([]);
  };
  const removeItem = (id) => {

    /* Non function approach to do things  */
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);

    /* function approach to do things  */
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    })
  }
  return (
    <>
      {people.map((person) => {
        // console.log(person);
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={handlerOnClick}>clear items</button>
    </>
  );
};

export default UseStateArray;
