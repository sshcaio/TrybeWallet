import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseAdding from '../helpers/ExpenseAdding';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    let totalExpense = 0;
    expenses.forEach((e) => {
      const add = ExpenseAdding(e);
      totalExpense += add;
    });
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ totalExpense.toFixed(2) }</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

const mapStateToProps = (rootReducer) => ({
  email: rootReducer.user.email,
  expenses: rootReducer.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
