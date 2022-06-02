import React, { Component } from 'react';
import Header from '../components/Header/Header';
import ExpensesForm from '../components/ExpensesForm/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable/ExpensesTable';
import '../App.css'

class Wallet extends Component {
  render() {
    return (
      <div className="Wallet">
        <div>
          <Header />
          <ExpensesForm />
        </div>
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
