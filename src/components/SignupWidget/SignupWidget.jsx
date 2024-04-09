import './SignupWidget.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SignupWidget = ({ title, content, simulateNetworkRequestTime, darkMode }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form data-testid={'signupWidget'} className={`signup-widget ${darkMode ? 'dark' : 'light'}`} onSubmit={handleSubmit} autoComplete={'false'}>
      <h2 data-testid={'signupWidgetTitle'}>{title}</h2>
      {isSubscribed && (
        <p data-testid={'signupWidgetMessage'} className={'message'}>
          {message}
        </p>
      )}
      {!isSubscribed && (
        <>
          <p data-testid={'signupWidgetContent'} className={darkMode ? 'dark-text' : 'light-text'}>{content}</p>
          <div className={'input-row'}>
            <input
              data-testid={'signupWidgetInput'}
              type="email"
              required={true}
              value={email}
              onChange={handleChange}
              disabled={busy}
              className={darkMode ? 'dark' : 'light'} // Aplica classe condicional para modo escuro ou claro
            />
            <button data-testid={'signupWidgetButton'} type="submit" disabled={busy} className={darkMode ? 'dark' : 'light'}>
              {busy ? 'Joining...' : 'Join'}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
  darkMode: PropTypes.bool.isRequired,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
