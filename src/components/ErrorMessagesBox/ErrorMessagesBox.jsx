import { Button } from '..';
import './ErrorMessagesBox.scss';

const ErrorMessagesBox = ({ title, body, actiton, actitonLable }) => {
  return (
    <div className='error-messages-box'>
      <h1 className='error-message-title'>{title}</h1>
      <p className='error-message-body'>{body}</p>
      <div className='error-message-action'>
        <Button onClick={actiton}>{actitonLable}</Button>
      </div>
    </div>
  );
};

export default ErrorMessagesBox;
