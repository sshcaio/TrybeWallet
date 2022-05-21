import React, { Component } from 'react';
import { emailToStore } from '../actions';
import { connect } from 'react-redux';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      disable: true,
    }
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
      email
    });
    history.push('/carteira');
  }

  render() {
    const { email, password, disable } = this.state;
    return (
      <div className="FormBox">
        <fieldset className="Form">
          <legend>Login:</legend>
          <label htmlFor="EmailInput">
            Email
            <input
              id="EmailInput"
              type="email"
              value={ email }
              onChange={ this.saveState }
              data-testid="email-input"
              name="email"
              isRequired
            />
          </label>
          <br />
          <label htmlFor="PasswordInput">
            Password
            <input
              id="PasswordInput"
              type="password"
              value={ password }
              onChange={ this.saveState }
              data-testid="password-input"
              name="password"
              isRequired
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
        </fieldset>
      </div>
    );
  }
}

Login.propTypes = {
};

const mapDispatchToProps = (dispatch) => ({
  saveEmailToStore: (email) => dispatch(emailToStore(email))
})

export default connect(null, mapDispatchToProps)(Login);
