import { useState } from 'react';

import { LeaveForm } from '../../components';

const LeaveRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    recordNumber: '',
    jobTitle: '',
    requestDate: new Date().toISOString().slice(0, 10),
    leaveType: 'regular', //or gatebass
    department: 'شعبة الاستلام والتجهيز',
    startingDate: new Date().toISOString().slice(0, 10),
    duration: 1,
  });
  return (
    <div>
      <LeaveForm formData={formData} />
    </div>
  );
};

export default LeaveRequest;

// "employee_id": 2, //name, record_number, job_title
// "request_date": "2024-02-06",
// "leave_type": "regular",
/*
		"starting_date": "2024-02-06",
		"duration": 1,
*/
