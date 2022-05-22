import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import Header from '../components/Header';

class Wallet extends Component {
  componentDidMount = async () => {
    const { dispatch } = this.props;
    dispatch(fetchAPI());
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Wallet);
