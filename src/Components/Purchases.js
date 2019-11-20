import React from 'react';
import BudgetForm from './PurchaseForm';
import { connect } from 'react-redux';
import { sortPurchases } from '../Methods/sort';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Purchases.css'

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
        <h2 id='paymentTitle'>Payments</h2>
        {
          categories.map(category =>
            <div id='categories' key={ category }>
              { `${category.charAt(0).toUpperCase() + category.slice(1)}` }
              <ul className='list-group' id='purchaseList' key={ category }>
                {
                  sort[category].map(item =>
                    <li className='list-group-item' id='listItem' key={ item.id }>
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


