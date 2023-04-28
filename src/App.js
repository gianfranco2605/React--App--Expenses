import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from 'react'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 50,
    date: new Date(2022, 7, 14)
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 250,
    date: new Date(2021, 6, 14)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 500,
    date: new Date(2020, 5, 11)
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2023, 5, 14)
  },
];

// AHOTHER WAY TO WRITE FUNCTION IS THE ARROW FUNCTION

// function App() {

const App = () => {

  const [expenses, setExpenses ] = useState(DUMMY_EXPENSES);

const addExpenseHandler = expense => {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
    
  });
}

 
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />   
      <Expenses  items={expenses}/>
      
      
     
    </div>
  );
}

export default App;
