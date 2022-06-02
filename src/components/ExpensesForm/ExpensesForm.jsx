import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesAPI, fetchPriceAPI } from '../../redux/actions/actions';
import { firstCurrency, firstMethod, firstTag } from '../../helpers/constants';
import '../../App.css'
import './ExpensesForm.css'

class ExpensesForm extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: firstCurrency,
      method: firstMethod,
      tag: firstTag,
    };
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
    const { id, value, description, currency, method, tag } = this.state;
    const saved = { id, value, description, currency, method, tag };

    const { dispatch } = this.props;
    dispatch(fetchPriceAPI(saved));

    const newID = id + 1;

    this.setState({
      id: newID,
      value: '',
      description: '',
      currency: firstCurrency,
      method: firstMethod,
      tag: firstTag,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
    const payment = [firstMethod, 'Cartão de crédito', 'Cartão de débito'];
    const tagList = [firstTag, 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <section className="TopWallet">
        <form className="Form ExpenseForm">
            <label htmlFor="ExpenseValue">
              <p>Valor</p>
              <input
                type="text"
                name="value"
                value={ value }
                id="ExpenseValue"
                onChange={ this.stateWrite }
                data-testid="value-input"
              />
            </label>
            <label className="CurrencySelect" htmlFor="CurrencySelect">
              <p>Moeda</p>
              <select
                name="currency"
                value={ currency }
                id="CurrencySelect"
                onChange={ this.stateWrite }
              >
                {currencies.map((e) => (
                  <option value={ e } key={ e }>{ e }</option>
                ))}
              </select>
            </label>
            <label className="PaymentMethod" htmlFor="PaymentMethod">
            <p>Método de pagamento</p>
              <select
                name="method"
                value={ method }
                id="PaymentMethod"
                onChange={ this.stateWrite }
                data-testid="method-input"
              >
                {payment.map((e) => (
                  <option value={ e } key={ e }>{ e }</option>
                ))}
              </select>
            </label>
            <label className="ExpenseTag" htmlFor="ExpenseTag">
              <p>Categoria</p>
              <select
                name="tag"
                value={ tag }
                id="ExpenseTag"
                onChange={ this.stateWrite }
                data-testid="tag-input"
              >
                {tagList.map((e) => (
                  <option value={ e } key={ e }>{ e }</option>
                ))}
              </select>
            </label>
            <label htmlFor="ExpenseDescription">
              <p>Descrição</p>
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
            type="button"
            id="SubmitExpense"
            onClick={ this.storeWrite }
          >
            Adicionar despesa
          </button>
        </form>
      </section>
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
