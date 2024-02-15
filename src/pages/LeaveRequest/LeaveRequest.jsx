import { useState } from 'react';

import {
  ErrorMessagesBox,
  LeaveForm,
  LeavePreview,
  Modal,
} from '../../components';
import { cheackLeaveValidity } from '../../utils';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValiedData, setIsValiedData] = useState(true);

  const onFormDataChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
    setIsValiedData(cheackLeaveValidity(formData));
    console.log(formData);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal closeOverlay={closeModalHandler}>
          {isValiedData ? (
            <LeavePreview leave={formData} />
          ) : (
            <ErrorMessagesBox
              title='نقص بيانات'
              body='الرجاء ملئ جميع الحقول المطلوبة..'
              actiton={closeModalHandler}
              actitonLable='عودة'
            />
          )}
        </Modal>
      )}
      <LeaveForm
        formData={formData}
        onFormDataChange={onFormDataChange}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
};

export default LeaveRequest;
