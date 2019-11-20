import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { calcStanding } from '../Methods/calculations';
import '../CSS/Budget.css';

const _Budget = ({ budget }) => {
  const balance = calcStanding(budget);
  console.log('budget: ', budget);
  return(
    <div>
      <h1>Budget Details</h1>
      <div id='editBudget'><Link to='/edit-budget'>Edit Budget</Link></div>
      <div id='budgetDetails'>
        <div>
          <h2>Starting Amount</h2>
          <div>
            {
              budget.total ? `$${(budget.total * 1).toFixed(2)}` : `$0.00`
            }
          </div>
        </div>
        <div>
          <h2>Finances</h2>
          <div>
            {
              budget.finances ? `$${(budget.finances * 1).toFixed(2)}` : `$0.00`
            }
          </div>
        </div>
        <div>
          <h2>Expenses</h2>
          <div>
            {
              budget.totalExpenses ? `$${(budget.totalExpenses * 1).toFixed(2)}` : `$0.00`
            }
          </div>
        </div>
        <div>
          <h2>Income</h2>
          <div>
            {
              budget.income ? `$${(budget.income * 1).toFixed(2)}` : `$0.00`
            }
          </div>
        </div>
        <div>
          <h2>Standing</h2>
          <div>{ balance >= 0 ? `You have $${balance.toFixed(2)} to utilize` : ` You are $${balance.toFixed(2)} in debt` }</div>
        </div>
      </div>
    </div>
  );
};

const Budget = connect(({ budget }) => {
  return {
    budget
  };
})(_Budget);

export default Budget;
