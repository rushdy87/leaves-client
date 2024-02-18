import { useEffect, useState } from 'react';

import { Button, ShowTable } from '../../components';

import './Acception.scss';

const Acception = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const updatedLeaves = data.filter((item) => item.status === 'wait');
    setLeaves(updatedLeaves);
  }, []);

  const handleAcceptingAll = () => {
    // conver all status to 'accept'
    console.log(leaves);
  };

  return (
    <div className='acception-container'>
      <div className='accept-all'>
        <Button onClick={handleAcceptingAll}>الموافقة على الجميع</Button>
      </div>
      <div className='acception-show'>
        <ShowTable
          data={leaves}
          columnsNames={{
            name: 'الاسم',
            recodr_id: 'رقم الحاسبة',
            starting_date: 'من تاريخ',
            duration: 'المدة',
          }}
          actions={[
            {
              actionName: 'Accept',
              actionIcon: <button>A</button>,
              actionFunc: () => null,
            },
            {
              actionName: 'Reject',
              actionIcon: <button>R</button>,
              actionFunc: () => null,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Acception;

const data = [
  {
    id: 1,
    employee_id: 1,
    request_date: '2024-02-06',
    leave_type: 'regular',
    starting_date: '2024-02-06',
    duration: 2,
    status: 'wait',
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
