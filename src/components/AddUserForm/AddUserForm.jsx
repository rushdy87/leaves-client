import { useState } from 'react';
import { Input, Button } from '..';
import './AddUserForm.scss';

const defaultValue = {
  name: '',
  username: '',
  password: '',
  role: 2,
};

const AddUserForm = ({ editMode, user, closeOverlay }) => {
  const [userData, setUserData] = useState(user ? user : defaultValue);

  const handleChange = (event) => {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  const handleCancelling = (event) => {
    event.preventDefault();
    closeOverlay();
  };

  return (
    <div className='add-user-container'>
      <div className='add-user-header'>
        {editMode ? (
          <>
            <h2>تعديل بيانات المستخدم</h2>
            <h3>{userData.name}</h3>
          </>
        ) : (
          <h2> أضافة مستخدم جديد</h2>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='add-user-form'>
          <div className='name-role-inputs'>
            <div className='add-user-input'>
              <Input
                type='text'
                name='name'
                label='الاسم'
                value={userData.name}
                handleChange={handleChange}
              />
            </div>
            <div className='add-user-input'>
              <select
                id='role'
                name='role'
                value={userData.role}
                onChange={handleChange}
              >
                <option value='1'>مدير</option>
                <option value='2'>أداري</option>
              </select>
            </div>
          </div>
          <div className='username-password-inputs'>
            <div className='add-user-input'>
              <Input
                type='text'
                name='username'
                label='اسم المستخدم'
                value={userData.username}
                handleChange={handleChange}
              />
            </div>
            <div className='add-user-input'>
              <Input
                type='password'
                name='password'
                label='كلمة المرور'
                value={userData.password}
                handleChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='add-user-actions'>
          <Button type='submit'>{editMode ? 'تعديل' : 'اضافة'}</Button>
          <Button type='button' onClick={handleCancelling}>
            إلغاء
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
