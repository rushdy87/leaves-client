import { Input, Button } from '..';

import './LeaveForm.scss';

const LeaveForm = ({ formData, onFormDataChange, onFormSubmit }) => {
  return (
    <div className='leave-form-container'>
      <h1 className='form-requiest_title'>استمارة طلب اجازة اعتيادية</h1>
      <form onSubmit={onFormSubmit}>
        <div className='date-and-type'>
          <div className='leave-form-input'>
            <label htmlFor='requestDate'>تاريخ الاجازة</label>
            <input
              type='date'
              name='requestDate'
              id='requestDate'
              value={formData.requestDate}
              onChange={onFormDataChange}
            />
          </div>
          <div className='leave-form-input'>
            <label htmlFor='leaveType'>نوع الاجازة</label>
            <select
              id='leaveType'
              name='leaveType'
              value={formData.leaveType}
              onChange={onFormDataChange}
            >
              <option value='regular'>اجازة اعتيادية</option>
              <option value='gatebass'>اجازة زمنية خاصة</option>
            </select>
          </div>
        </div>
        <div className='employee-details'>
          <div className='leave-form-input'>
            <Input
              type='text'
              name='name'
              label='الاسم'
              value={formData.name}
              handleChange={onFormDataChange}
            />
          </div>
          <div className='leave-form-input'>
            <Input
              type='number'
              name='recordNumber'
              label='رقم الحاسبة'
              value={formData.recordNumber}
              handleChange={onFormDataChange}
            />
          </div>
          <div className='leave-form-input'>
            <Input
              type='text'
              name='jobTitle'
              label='العنوان الوظيفي'
              value={formData.jobTitle}
              handleChange={onFormDataChange}
            />
          </div>
        </div>
        <div className='starting-and-duration'>
          <div className='leave-form-input'>
            <label htmlFor='startingDate'>من تاريخ: </label>
            <input
              type='date'
              name='startingDate'
              id='startingDate'
              value={formData.startingDate}
              onChange={onFormDataChange}
            />
          </div>
          <div className='leave-form-input'>
            <label htmlFor='duration'>المدة</label>
            <select
              name='duration'
              id='duration'
              value={formData.duration.toString()} // Convert to string
              onChange={onFormDataChange}
            >
              {Array.from({ length: 30 }, (_, i) => (
                <option key={i + 1} value={(i + 1).toString()}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className='leave-form-actions'>
          <Button type='submit'>معاينة</Button>
        </div>
      </form>
    </div>
  );
};

export default LeaveForm;
