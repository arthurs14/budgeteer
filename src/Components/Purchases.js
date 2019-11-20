import React from 'react';
import BudgetForm from './PurchaseForm';
import { connect } from 'react-redux';
import { sortPurchases } from '../Methods/sort';

const _Budget = ({ purchases }) => {
  const sort = sortPurchases(purchases);
  const categories = Object.keys(sort);
  return(
    <div id='container'>
      <h1>Purchase Summary</h1>
      <div id='formDiv'>
        <BudgetForm />
      </div>
      <div id='payments'>
        <h2>Payments</h2>
        {
          categories.map(category =>
            <div key={ category }>
              { `${category.charAt(0).toUpperCase() + category.slice(1)}` }
              <ul key={ category }>
                {
                  sort[category].map(item =>
                    <li key={ item.id }>
                      {item.purchaseName} - ${item.price}
                    </li>
                  )
                }
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
};

const Budget = connect(({ purchases }) => {
  return {
    purchases
  };
})(_Budget);

export default Budget;


