import { Input, Button } from '..';
import './LeaveForm.scss';

const LeaveForm = ({ formData }) => {
  return (
    <div className='leave-form-container'>
      <h1 className='form-requiest_title'>استمارة طلب اجازة اعتيادية</h1>
      <form>
        <div className='date-and-type'>
          <div className='leave-form-input'>
            <label htmlFor='requestDate'>تاريخ الاجازة</label>
            <input type='date' name='requestDate' id='requestDate' />
          </div>
          <div className='leave-form-input'>
            <label htmlFor=''>نوع الاجازة</label>
            <select id='leaveType' name='leaveType' value='regular'>
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
              // value={employeeData.name}
              // handleChange={handleChange}
            />
          </div>
          <div className='leave-form-input'>
            <Input
              type='number'
              name='record_number'
              label='رقم الحاسبة'
              // value={employeeData.record_number}
              // handleChange={handleChange}
            />
          </div>
          <div className='leave-form-input'>
            <Input
              type='text'
              name='job_title'
              label='العنوان الوظيفي'
              // value={employeeData.job_title}
              // handleChange={handleChange}
            />
          </div>
        </div>
        <div className='starting-and-duration'>
          <div className='leave-form-input'>
            <label htmlFor='startingDate'>من تاريخ: </label>
            <input type='date' name='startingDate' id='startingDate' />
          </div>
          <div className='leave-form-input'>
            <label htmlFor='duration'>المدة</label>
            <select
              name='duration'
              id='duration'
              // value={formData.duration.toString()} // Convert to string
              // onChange={handleChange}
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
