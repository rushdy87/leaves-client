import { useState } from 'react';

import { LeaveForm, LeavePreview, Modal } from '../../components';

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

  const onFormDataChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
    console.log(formData);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal closeOverlay={closeModalHandler}>
          <LeavePreview leave={formData} />
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
