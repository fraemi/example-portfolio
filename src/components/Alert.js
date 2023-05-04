import { Alert } from 'react-bootstrap';
import { useAlertContext } from '../context/alertContext';

// This is a global component that uses context to display a global alert message.

function AlertMessage() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const isSuccess = type === 'success';

  return (
    <>
      {isOpen && (
        <>
          <div className='overlay'></div>
          <Alert
            onClose={onClose}
            dismissible
            variant={isSuccess ? 'success' : 'danger'}
          >
            <Alert.Heading>{isSuccess ? 'All good!' : 'Oops!'}</Alert.Heading>
            <p>{message}</p>
          </Alert>
        </>
      )}
    </>
  );
}

export default AlertMessage;
