import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeBudget } from '../Redux/store';
import { calcExpenses } from '../Methods/calculations';

class _BudgetForm extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      finances: 0,
      expenses: 0,
      income: 0,
      redirect: false
    };
    this.save = this.save.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  save(ev) {
    ev.preventDefault();
    const {total, finances, expenses, income} = this.state;
    const id = this.props.budget[0].id;
    // calculate expenses
    const totalExpenses = calcExpenses(expenses);
    this.props.updateBudget({
      id,
      total: total * 1,
      finances: finances * 1,
      totalExpenses,
      income: income * 1
    });
    this.setState({ redirect: true });
  }

  render() {
    const { total, finances, expenses, income, redirect } = this.state;
    const { onChange, save } = this;
    //console.log('user budget: ', this.props.budget );

    if(redirect) {
      return <Redirect to='/budget' />;
    }

    return(
      <div>
        <h1>Change Budget Details</h1>
        <form onSubmit={ save }>
          <div>
            <label htmlFor='total'>Starting Amount</label> <br />
            <input type='number' name='total' value={ total } onChange={ onChange } />
          </div><br />
          <div>
            <label htmlFor='financeTotal'>Finances</label> <br />
            <input type='number' name='finances' value={ finances } onChange={ onChange } />
          </div><br />
          <div>
            <label htmlFor='expenseTotal'>Expenses</label> <br />
            <input type='number' name='expenses' value={ expenses } onChange={ onChange } />
          </div><br />
          <div>
            <label htmlFor='income'>Income</label> <br />
            <input type='number' name='income' value={ income } onChange={ onChange } />
          </div> <br />
          <button>Save Changes</button>
        </form>
      </div>
    );
  }
}

const BudgetForm = connect(({ budget }) => {
  return {
    budget
  };
}, (dispatch) => {
  return {
    updateBudget: (budget) => dispatch(changeBudget(budget))
  };
})(_BudgetForm);

export default BudgetForm;
