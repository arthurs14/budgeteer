import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

class _PurchaseForm extends Component {
  constructor() {
    super();
    this.state = {
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
    this.props.addItem(this.state);
    this.setState({
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
        <div className='form-group'>
          <label htmlFor='purchaseName'>Name of Purchase</label> <br />
          <input type='text' name='purchaseName' value={ purchaseName } onChange={ onChange } />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label> <br />
          <input type='number' name='price' value={ price } onChange={ onChange } />
        </div>
        <div className='form-group'>
          <label htmlFor='category'>Category</label> <br />
          <input type='text' name='category' value={ category } onChange={ onChange } />
        </div>
        <button className='btn btn-primary'>Add Purchase</button>
      </form>
    );
  }
}

const PurchaseForm = connect(null, (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
})(_PurchaseForm);

export default PurchaseForm;
