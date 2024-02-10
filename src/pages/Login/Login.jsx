import { useState, useContext } from 'react';

import { Input, Button } from '../../components';
import { AuthContext } from '../../context/auth-context';

import './Login.scss';

const Login = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const { error, setError, login } = useContext(AuthContext);

  const handelUserDataChange = (event) => {
    setError('');
    setUserData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData.username, userData.password);
    setUserData({ username: '', password: '' });
  };

  return (
    <div className='login-page'>
      <form onSubmit={handleSubmit}>
        <div className='login-wraper'>
          <div className='input-field'>
            <Input
              type='text'
              label='اسم المستخدم'
              id='username'
              name='username'
              handleChange={handelUserDataChange}
              value={userData.username}
            />
          </div>

          <div className='input-field'>
            <Input
              type='password'
              label='الرقم السري'
              id='password'
              name='password'
              handleChange={handelUserDataChange}
              value={userData.password}
            />
          </div>

          {error && <span className='login-error'>{error}</span>}

          <Button
            className='primary'
            type='submit'
            disabled={userData.username === '' || userData.password === ''}
          >
            تسجيل الدخول
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
