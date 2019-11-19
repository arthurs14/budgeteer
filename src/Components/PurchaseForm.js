import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToList } from '../Redux/store';
import uuid from 'uuid';

class _PurchaseForm extends Component {
  constructor() {
    super();
    this.state = {
      id: uuid.v4(),
      purchaseName: '',
      price: 0,
      category: ''
    };
    this.create = this.create.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }

  create(ev) {
    ev.preventDefault();
    this.props.AddItem(this.state);
    this.setState({
      id: uuid.v4(),
      purchaseName: '',
      price: 0,
      category: ''
    });
  }

  render() {
    const { purchaseName, price, category } = this.state;
    const { create, onChange } = this;
    return(
      <form onSubmit={ create }>
        <div>
          <label htmlFor='purchaseName'>Name of Purchase</label> <br />
          <input type='text' name='purchaseName' value={ purchaseName } onChange={ onChange } /> <br />
        </div>
        <div>
          <label htmlFor='price'>Price</label> <br />
          <input type='number' name='price' value={ price } onChange={ onChange } />
        </div>
        <div>
          <label htmlFor='category'>Category</label> <br />
          <input type='text' name='category' value={ category } onChange={ onChange } />
        </div>
        <button>Add Purchase</button>
      </form>
    );
  }
}

const PurchaseForm = connect(null, (dispatch) => {
  return {
    AddItem: (item) => dispatch(addToList(item))
  }
})(_PurchaseForm);

export default PurchaseForm;
