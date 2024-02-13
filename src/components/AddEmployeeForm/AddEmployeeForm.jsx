import { useState } from 'react';
import { Input, Button } from '..';
import './AddEmployeeForm.scss';

const defaultValue = {
  name: '',
  record_number: '',
  job_title: '',
};

const AddEmployeeForm = ({ editMode, employee, closeOverlay }) => {
  const [employeeData, setEmployeeData] = useState(
    employee ? employee : defaultValue
  );

  const handleChange = (event) => {
    setEmployeeData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(employeeData);
  };

  const handleCancelling = (event) => {
    event.preventDefault();
    closeOverlay();
  };

  return (
    <div className='add-form-container'>
      <div className='add-form-header'>
        {editMode ? (
          <>
            <h2>تعديل بيانات الموظف</h2>
            <h3>{employeeData.name}</h3>
          </>
        ) : (
          <h2>تعديل بيانات الموظف</h2>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='add-form-inputs'>
          <Input
            type='text'
            name='name'
            label='الاسم'
            value={employeeData.name}
            handleChange={handleChange}
          />
          <Input
            type='text'
            name='record_number'
            label='رقم الحاسبة'
            value={employeeData.record_number}
            handleChange={handleChange}
          />
          <Input
            type='text'
            name='job_title'
            label='العنوان الوظيفي'
            value={employeeData.job_title}
            handleChange={handleChange}
          />
        </div>
        <div className='add-form-actions'>
          <Button type='submit'>{editMode ? 'تعديل' : 'اضافة'}</Button>
          <Button type='button' onClick={handleCancelling}>
            إلغاء
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
