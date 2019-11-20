import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../CSS/App.css';

// Components
import Nav from './Nav';
import Overview from './Overview';
import Purchases from './Purchases';
import Budget from './Budget';
import BudgetForm from './BudgetForm';
import { getBudget } from '../Redux/store';

class _Main extends Component {
  componentDidMount() {
    // when we have a way to persist?
    this.props.getBudget();
  }

  render() {
    return(
      <HashRouter>
        <Route component={ Nav } />
        <Route path='/' component={ Overview } exact />
        <Route path='/purchases' component={ Purchases } exact />
        <Route path='/budget' component={ Budget } exact />
        <Route path='/edit-budget' component={ BudgetForm } exact />
      </HashRouter>
    );
  }
}

const Main = connect(null, (dispatch) => {
  return {
    getBudget: () => dispatch(getBudget())
  };
})(_Main);

export default Main;
