import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import expenseAdding from '../helpers/ExpenseAdding';

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((e) => (
            <tr key={ e.id }>
              <td>{ e.description }</td>
              <td>{ e.tag }</td>
              <td>{ e.method }</td>
              <td>{ (Number(e.value)).toFixed(2) }</td>
              <td>{ e.exchangeRates[e.currency].name }</td>
              <td>{ (Number(e.exchangeRates[e.currency].ask)).toFixed(2) }</td>
              <td>{ expenseAdding(e, e.currency).toFixed(2) }</td>
              <td>Real</td>
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
