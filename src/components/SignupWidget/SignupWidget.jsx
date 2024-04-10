import './SignupWidget.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SignupWidget = ({ title, content, simulateNetworkRequestTime, darkMode }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [userMessage, setUserMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));

      // Enviar mensagem por e-mail
      await sendEmailToRecipient(userMessage);

      setMessage(`Thanks for your message! We have sent it to jrufrj@yahoo.com.br`);
      setIsSubscribed(true);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage(`Failed to send message. Please try again later.`);
    } finally {
      setBusy(false);
    }
  }

  const handleChange = (e) => {
    setUserMessage(e.target.value);
  };

  const sendEmailToRecipient = async (message) => {
    // Simulação de envio de mensagem por e-mail
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulando 1 segundo de tempo de envio
    console.log(`Message sent to jrufrj@yahoo.com.br: ${message}`);
    // Aqui você pode adicionar lógica real para enviar a mensagem por e-mail
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
          <div>
            <textarea
              data-testid={'signupWidgetTextarea'}
              required={true}
              value={userMessage}
              onChange={handleChange}
              disabled={busy}
              rows={4}
              className={`message-input ${darkMode ? 'dark' : 'light'}`} // Adiciona classe para o campo de mensagem
            />

            <div className={'input-row'}>
            <button data-testid={'signupWidgetButton'} type="submit" disabled={busy} className={darkMode ? 'dark' : 'light'}>
              {busy ? 'Sending...' : 'Send Message'}
            </button>
            </div>
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
