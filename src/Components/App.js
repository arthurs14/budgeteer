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
import { getBudget, getList } from '../Redux/store';

class _Main extends Component {
  componentDidMount() {
    this.props.getData();
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
    getData: () => {
      dispatch(getBudget()),
      dispatch(getList())
    }
  };
})(_Main);

export default Main;
