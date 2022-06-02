import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emailToStore } from '../redux/actions/actions';
import '../App.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disable: true,
    };
  }

  validateButton = () => {
    const { email, password } = this.state;
    let enabled = false;

    const EMAIL_MIDDLE = email.includes('@');
    const EMAIL_END = email.includes('.com');
    const MIN_PASSWORD_LENGTH = 6;
    const PASSWORD_VALID = password.length >= MIN_PASSWORD_LENGTH;
    if (EMAIL_MIDDLE && EMAIL_END && PASSWORD_VALID) enabled = true;

    if (enabled === true) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  }

  saveState = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateButton);
  }

  saveButton = () => {
    const { history, saveEmailToStore } = this.props;
    const { email } = this.state;
    saveEmailToStore({
      email,
    });
    history.push('/carteira');
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <div className="FormBox">
        <h2>Login</h2>
        <form className="Form">
          <label htmlFor="EmailInput">
            <p>Email</p>
            <input
              id="EmailInput"
              type="email"
              value={ email }
              onChange={ this.saveState }
              data-testid="email-input"
              name="email"
              placeholder="Type your email"
              autocomplete="off"
              isrequired="true"
            />
          </label>
          <br />
          <label htmlFor="PasswordInput">
            <p>Password</p>
            <input
              id="PasswordInput"
              type="password"
              value={ password }
              onChange={ this.saveState }
              data-testid="password-input"
              name="password"
              placeholder="Type your password"
              autocomplete="off"
              isrequired="true"
            />
          </label>
          <br />
          <button
            type="button"
            data-testid="save-button"
            disabled={ disable }
            onClick={ this.saveButton }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  saveEmailToStore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmailToStore: (email) => dispatch(emailToStore(email)),
});

export default connect(null, mapDispatchToProps)(Login);
