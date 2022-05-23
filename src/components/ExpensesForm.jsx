import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesAPI, fetchPriceAPI } from '../actions';

class ExpensesForm extends Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }
  }

  componentDidMount = async () => {
    const { dispatch } = this.props;
    dispatch(fetchCurrenciesAPI());
  }

  stateWrite = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  storeWrite = async () => {
    const { id, value, description, currency, method, tag, } = this.state;
    const saved = { id, value, description, currency, method, tag };

    const { dispatch } = this.props;
    dispatch(fetchPriceAPI(saved));

    const newID = id + 1;

    this.setState({
      id: newID,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  render() {
    const { value, description, currency, method, tag, } = this.state;
    const { currencies } = this.props;
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagList = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <header>
        <label htmlFor="ExpenseValue">
          {`Valor: `}
          <input
            type="number"
            name="value"
            value={ value }
            id="ExpenseValue"
            onChange={ this.stateWrite }
            data-testid="value-input"
          />
        </label>
        <label htmlFor="CurrencySelect">
          {`Moeda: `}
          <select
            name="currency"
            value={ currency }
            id="CurrencySelect"
            className="CurrencySelect"
            onChange={ this.stateWrite }
          >
            {currencies.map((e) => (
              <option value={ e } key={ e }>{ e }</option>
            ))}
          </select>
        </label>
        <label htmlFor="PaymentMethod">
          {`Método de pagamento: `}
          <select
            name="method"
            value={ method }
            id="PaymentMethod"
            className="PaymentMethod"
            onChange={ this.stateWrite }
            data-testid="method-input"
          >
            {payment.map((e) => (
              <option value={ e } key={ e }>{ e }</option>
            ))}
          </select>
        </label>
        <label htmlFor="ExpenseTag">
          {`Categoria: `}
          <select
            name="tag"
            value={ tag }
            id="ExpenseTag"
            className="ExpenseTag"
            onChange={ this.stateWrite }
            data-testid="tag-input"
          >
            {tagList.map((e) => (
              <option value={ e } key={ e }>{ e }</option>
            ))}
          </select>
        </label>
        <label htmlFor="ExpenseDescription">
          {`Descrição: `}
          <input
            type="text"
            name="description"
            value={ description }
            id="ExpenseDescription"
            onChange={ this.stateWrite }
            data-testid="description-input"
          />
        </label>
        <button
          type="submit"
          id="SubmitExpense"
          onClick={ this.storeWrite }
        >
          {`Adicionar despesa`}
        </button>
      </header>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (rootReducer) => ({
  currencies: rootReducer.wallet.currencies,
});

export default connect(mapStateToProps)(ExpensesForm);