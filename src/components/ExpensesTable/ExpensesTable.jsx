import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import expenseAdding from '../../helpers/ExpenseAdding';
import './ExpensesTable.css'

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Tag</th>
            <th>Payment method</th>
            <th>Value</th>
            <th>Currency</th>
            <th>Exchange rate</th>
            <th>Exchanged value</th>
            <th>Exchanged currency</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr id="ExpenseData" key={ e.id }>
              <td>{ e.description }</td>
              <td>{ e.tag }</td>
              <td>{ e.method }</td>
              <td>{ (Number(e.value)).toFixed(2) }</td>
              <td>{ e.exchangeRates[e.currency].name }</td>
              <td>{ (Number(e.exchangeRates[e.currency].ask)).toFixed(2) }</td>
              <td>{ expenseAdding(e, e.currency).toFixed(2) }</td>
              <td>Brazilian Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

const mapStateToProps = (rootReducer) => ({
  expenses: rootReducer.wallet.expenses,
});

export default connect(mapStateToProps)(ExpensesTable);
