import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email } = this.props;
    console.log(email)
    return (
      <header>
        <div data-testid="email-field">{ email }</div>
        <div data-testid="total-field">{ 0 }</div>
        <div data-testid="header-currency-field">BRL</div>
      </header>
    )
  }
}

const mapStateToProps = (rootReducer) => ({
  email: rootReducer.user.email,
})

export default connect(mapStateToProps)(Header);
