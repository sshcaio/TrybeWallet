import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseAdding from '../../helpers/ExpenseAdding';
import './Header.css';

class Header extends Component {
  render() {
    const loginError = 'Failed to load user, please login again';
    const { email, expenses } = this.props;
    let totalExpense = 0;
    expenses.forEach((e) => {
      const add = ExpenseAdding(e, e.currency);
      totalExpense += add;
    });
    return (
      <header>
        <div className="User">
          <div className="HeaderTitle">Logged as</div>
          <div data-testid="email-field">
            { email ? email : loginError }
          </div>
        </div>
        <div className="AppTitle">
          <span>trybe</span>
          <span id="walletHalf">wallet</span>
        </div>
        <div className="TotalContainer">
          <div className="HeaderTitle">Total expenses</div>
          <div className="TotalExpenses">
            <div data-testid="total-field">{`${totalExpense.toFixed(2)}  `}</div>
            <div data-testid="header-currency-field">BRL</div>
          </div>
        </div>
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
