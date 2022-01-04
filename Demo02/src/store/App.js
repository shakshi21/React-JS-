import React from 'react';
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'News Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Health Insurance',
      amount: 2000,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement (
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Here your bills!"),
  //   React.createElement(expenses,{items: expenses })
  // );
  return(
    <div>
      <h2>Here your bills!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;