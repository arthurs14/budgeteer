import React from 'react';
import { connect } from 'react-redux';
import '../CSS/Overview.css';
import { getTodaysDate, daysLeft } from '../Methods/dateMethods';
import { calcTotalSpent } from '../Methods/calculations';

const _Overview = ({ purchases, budget }) => {
  const totalSpent = calcTotalSpent(purchases, budget);
  return(
    <div>
      <h1>Overview</h1>
      <div>
        <h2>{`${getTodaysDate()} (${daysLeft()} days left)`}</h2>
      </div>
      <div>
        <h3>Total Spent</h3>
          <div>${totalSpent.toFixed(2)}</div>
      </div>
      <div>
        <h3>Spendable Money per Day</h3>
        <div> -- insert value -- </div>
      </div>
      <div>
        <h3>Budget Standing</h3>
        <div> -- insert if in the positive/negative --</div>
      </div>
    </div>
  );
};

const Overview = connect(({ purchases, budget }) => {
  return {
    purchases,
    budget
  };
})(_Overview);

export default Overview;
