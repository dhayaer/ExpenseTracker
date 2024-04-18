import React, { useEffect, useState } from 'react';
import './App.css'

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [income,setIncome]= useState('');
  const [newIncome,setNewIncome]=useState('')
  const [balance,setBalance]=useState('')

       useEffect(()=>{
        setBalance(newIncome-totalExpense)
       }) 

  const addIncome = () =>{
    
      setNewIncome(income)
      
  }

  const addExpense = () => {
    if (description !== '' && amount !== '') {
      const newExpense = {
        description,
        amount: parseFloat(amount),
     
      };
      setExpenses([...expenses, newExpense]);
      setDescription('');
      setAmount('');
    }
  };

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="container">
      <h1 className="heading">Expense Tracker</h1>
      <div>
     
      <input type="number" 
        placeholder='income'
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        />
        <button
        
          className="button"
          onClick={addIncome}
        >
          Add Income
        </button>
      </div>
      <div className="form-container">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
        

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input"
        />
       
        <button
          onClick={addExpense}
          className="button"
        >
          Add Expense
        </button>
        <h2>Total Income: Rs.{newIncome}/-</h2>
      </div>
      <div className="total-container">
        <h2>Total Expense: Rs.{totalExpense.toFixed(2)}/-</h2>
      </div>
      <div>
        <h2>Expense List</h2>
        <ul className="expense-list">
          {expenses.map(expense => (
            <li key={expense.id} className="expense-item">
              <strong>{expense.description}</strong> - Rs.{expense.amount.toFixed(2)}/-
            </li>
          ))}
        </ul>
      </div>
      <h2>Balance: Rs.{balance}/-</h2>
    </div>
  );
};

export default ExpenseTracker;
