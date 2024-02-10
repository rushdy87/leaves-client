import { useState } from 'react';

import { Input } from '../../components';

import './Login.scss';
import Button from '../../components/Button/Button';

const Login = () => {
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handelUserDataChange = (event) => {
    setUserData((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
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
