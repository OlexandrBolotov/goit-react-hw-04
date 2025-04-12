import styles from './ErrorMessage.module.css';

const ErrorMessage = ({ message = 'Something went wrong. Please try again.' }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
