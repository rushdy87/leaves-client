import { useEffect, useState } from 'react';
import {
  Search,
  ShowTable,
  Modal,
  AddEmployeeForm,
  Button,
} from '../../components';
import './Employees.scss';

const data = [
  {
    id: 1,
    name: 'فايا محمد حسام',
    record_number: 1111,
    job_title: 'م. مهندس',
  },
  {
    id: 2,
    name: 'راما محمد حسام',
    record_number: 2222,
    job_title: 'م. مهندس',
  },
];

const columnsNames = {
  id: 'ت',
  name: 'الاسم',
  record_number: 'رقم الحاسبة',
  job_title: 'العنوان الوظيفي',
};

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setEmployees(data);
  }, []);

  const onEmployeesChange = (name, record_number) => {
    if (record_number) {
      const updatedData = data.filter(
        (employee) => employee.record_number === +record_number
      );
      setEmployees(updatedData);
    }
    if (name !== '') {
      const updatedData = data.filter((employee) =>
        employee.name.includes(name)
      );
      setEmployees(updatedData);
    }
  };

  const resetSearching = () => {
    setEmployees(data);
  };

  const openModalHandler = (doc) => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal closeOverlay={closeModalHandler}>
          {<AddEmployeeForm editMode />}
        </Modal>
      )}
      <div className='employees-page-container'>
        <div className='employees-search'>
          <Search
            onEmployeesChange={onEmployeesChange}
            resetSearching={resetSearching}
          />
        </div>
        <div className='employees-add-action'>
          <Button onClick={openModalHandler}>إضافة موظف جديد</Button>
        </div>
        <div className='employees-show-table'>
          <ShowTable data={employees} columnsNames={columnsNames} />
        </div>
      </div>
    </>
  );
};

export default Employees;
