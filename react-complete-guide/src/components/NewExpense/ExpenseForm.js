import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEneteredTitle] = useState('');
  const [enteredAmount, setEneteredAmount] = useState('');
  const [enteredDate, setEneteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   eneteredTitle: '',
  //   enteredAmout: '',
  //   enteredDate: '',
  // });

  // const titleChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, eneteredTitle: event.target.value };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, eneteredAmount: event.target.value };
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return { ...prevState, eneteredDate: event.target.value };
  //   });
  // };

  const titleChangeHandler = (event) => {
    setEneteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEneteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEneteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const epxenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(epxenseData);

    setEneteredTitle('');
    setEneteredAmount('');
    setEneteredDate('');

    console.log(epxenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            value={enteredAmount}
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
