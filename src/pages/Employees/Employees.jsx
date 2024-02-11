import { ShowTable } from '../../components';
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
  return (
    <div className='employees-page-container'>
      <div className='employees-search'>This is Search component..</div>
      <div className='employees-add-action'>
        This is button to add an employee, her we will use modal
      </div>
      <div className='employees-show-table'>
        <ShowTable data={data} columnsNames={columnsNames} />
      </div>
    </div>
  );
};

export default Employees;
