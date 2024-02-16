import { useState } from 'react';

import { Button, ShowTable } from '../../components';

import './PrintLeaves.scss';

const PrintLeaves = () => {
  const [leavesType, setLeavesType] = useState('regular');
  const [leaves, setLeaves] = useState(data);

  return (
    <div className='print-leaves-container'>
      <div className='print-leaves-type'>
        <Button
          className={leavesType === 'regular' ? 'dark' : 'light'}
          onClick={() => setLeavesType('regular')}
        >
          اجازة اعتيادية
        </Button>

        <Button
          className={leavesType === 'gatebass' ? 'dark' : 'light'}
          onClick={() => setLeavesType('gatebass')}
        >
          اجازة زمنية خاصة
        </Button>
      </div>
      <div className='print-all'>
        <Button className='primary' onClick={() => console.log(leaves)}>
          طباعة الجميع
        </Button>
      </div>
      <div className='print-leaves-table'>
        <ShowTable
          data={leaves}
          columnsNames={{
            name: 'الاسم',
            recodr_id: 'رقم الحاسبة',
            starting_date: 'من تاريخ',
            duration: 'المدة',
          }}
        />
      </div>
    </div>
  );
};

export default PrintLeaves;

const data = [
  {
    id: 1,
    employee_id: 1,
    request_date: '2024-02-06',
    leave_type: 'regular',
    starting_date: '2024-02-06',
    duration: 2,
    status: 'rejected',
    createdAt: '2024-02-06T07:37:40.378Z',
    updatedAt: '2024-02-06T19:12:45.327Z',
  },
  {
    id: 2,
    employee_id: 2,
    request_date: '2024-02-06',
    leave_type: 'regular',
    starting_date: '2024-02-06',
    duration: 1,
    status: 'accepted',
    createdAt: '2024-02-06T07:58:26.239Z',
    updatedAt: '2024-02-09T21:10:40.766Z',
  },
  {
    id: 3,
    employee_id: 2,
    request_date: '2024-02-07',
    leave_type: 'regular',
    starting_date: '2024-02-07',
    duration: 10,
    status: 'finsh',
    createdAt: '2024-02-06T19:02:23.166Z',
    updatedAt: '2024-02-07T06:24:39.362Z',
  },
  {
    id: 4,
    employee_id: 1,
    request_date: '2024-02-07',
    leave_type: 'regular',
    starting_date: '2024-02-07',
    duration: 10,
    status: 'accepted',
    createdAt: '2024-02-06T19:02:32.803Z',
    updatedAt: '2024-02-09T21:10:40.766Z',
  },
  {
    id: 5,
    employee_id: 1,
    request_date: '2024-02-07',
    leave_type: 'regular',
    starting_date: '2024-02-07',
    duration: 10,
    status: 'finsh',
    createdAt: '2024-02-06T19:02:34.348Z',
    updatedAt: '2024-02-07T06:24:39.362Z',
  },
  {
    id: 6,
    employee_id: 1,
    request_date: '2024-02-07',
    leave_type: 'regular',
    starting_date: '2024-02-07',
    duration: 10,
    status: 'accepted',
    createdAt: '2024-02-06T19:02:35.531Z',
    updatedAt: '2024-02-09T21:10:40.766Z',
  },
  {
    id: 7,
    employee_id: 1,
    request_date: '2024-02-07',
    leave_type: 'gatebass',
    starting_date: '2024-02-07',
    duration: 10,
    status: 'finsh',
    createdAt: '2024-02-06T19:03:22.947Z',
    updatedAt: '2024-02-07T06:24:39.362Z',
  },
  {
    id: 8,
    employee_id: 1,
    request_date: '2024-02-07',
    leave_type: 'gatebass',
    starting_date: '2024-02-07',
    duration: 10,
    status: 'accepted',
    createdAt: '2024-02-09T21:08:56.667Z',
    updatedAt: '2024-02-09T21:10:40.766Z',
  },
];
