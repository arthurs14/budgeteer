import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

// Purchase reducer
const SET_LIST = 'SET_LIST';
const ADD_ITEM = 'ADD_ITEM';

// Budget Reducer
const SET_BUDGET = 'SET_BUDGET';
const UPDATE_BUDGET = 'UPDATE_BUDGET';

const purchaseReducer = (state = {}, action) => {
  switch(action.type) {
    case SET_LIST:
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
      return state[0] === action.budget ? state[0] : action.budget;
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
const setList = (list) => ({ type: SET_LIST,list });
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
  return async (dispatch) => {
    await axios.put(`/api/updatebudget/${budget.id}`, budget);
    return dispatch(updateBudget(budget));
  };
};

// Purchase Calls
const getList = () => {
  return async(dispatch) => {
    const list = (await axios.get('/api/purchases')).data;
    dispatch(setList(list));
  };
};

const addItem = (item) => {
  console.log('item: ', item);
  return async(dispatch) => {
    const added = (await axios.post('/api/addpurchase', item)).data;
    dispatch(addToList(added));
  };
};

export default store;
export {
  setList,
  addToList,
  setBudget,
  updateBudget,
  getBudget,
  changeBudget,
  getList,
  addItem
};

