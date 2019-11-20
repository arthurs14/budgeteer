import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { calcStanding } from '../Methods/calculations';

const _Budget = ({ budget }) => {

  const userBudget = {...budget[0]};
  const balance = calcStanding(userBudget);
  console.log('budget page: ', budget);
  return(
    <div>
      <h1>Budget Details</h1>
      <div><Link to='/edit-budget'>Edit Budget</Link></div>
      <div id='budgetDetails'>
        <div>
          <h2>Starting Amount</h2>
          <div>
            {
              userBudget.total ? `$${(userBudget.total * 1).toFixed(2)}` : `$0.00`
            }
          </div>
        </div>
        <div>
          <h2>Finances</h2>
          <div>
            {
              userBudget.finances ? `$${(userBudget.finances * 1).toFixed(2)}` : `$0.00`
            }
          </div>
        </div>
        <div>
          <h2>Expenses</h2>
          <div>
            {
              userBudget.totalExpenses ? `$${(userBudget.totalExpenses * 1).toFixed(2)}` : `$0.00`
            }
          </div>
        </div>
        <div>
          <h2>Income</h2>
          <div>
            {
              userBudget.income ? `$${(userBudget.income * 1).toFixed(2)}` : `$0.00`
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
