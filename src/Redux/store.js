import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

// Purchase reducer
const GET_LIST = 'GET_LIST';
const ADD_ITEM = 'ADD_ITEM';

// Budget Reducer
const SET_BUDGET = 'SET_BUDGET';
const UPDATE_BUDGET = 'UPDATE_BUDGET';

const purchaseReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_LIST:
      return action.list;
    case ADD_ITEM:
      const categories = Object.keys(state);
      const category = action.item.category;
      if(categories.includes(category)) {
        state[category] = [...state[category], action.item];
        return {...state};
      }
      state[category] = [];
      state[category].push(action.item);
      return {...state};
    default:
      return state;
  }
};

const budgetReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_BUDGET:
      return action.budget;
    case UPDATE_BUDGET:
      return state.id === action.budget.id ? action.budget : state;
    default:
      return state;
  }
};

const reducer = combineReducers({
  purchases: purchaseReducer,
  budget: budgetReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

// Action Creators
// Purchase Creators
const getList = () => ({ type: GET_LIST });
const addToList = (item) => ({ type: ADD_ITEM, item});

// Budget Creators
const setBudget = (budget) => ({ type: SET_BUDGET, budget });
const updateBudget = (budget) => ({ type: UPDATE_BUDGET, budget });

// Thunks
// Budget Calls
const getBudget = () => {
  return async(dispatch) => {
    const budget = (await axios.get('/api/budget')).data;
    dispatch(setBudget(budget));
  };
};

const changeBudget = (budget) => {
  console.log('budget thunk: ', budget);
  const newBudget = {...budget};
  return async (dispatch) => {
    await axios.put(`/api/updatebudget/${newBudget.id}`, newBudget);
    return dispatch(updateBudget(newBudget));
  };
};

export default store;
export {
  getList,
  addToList,
  setBudget,
  updateBudget,
  getBudget,
  changeBudget
};

