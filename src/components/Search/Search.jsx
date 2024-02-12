import { useState } from 'react';
import { Button, Input } from '..';
import './Search.scss';

const Search = ({ onEmployeesChange, resetSearching }) => {
  const [searchFields, setSearchFields] = useState({
    name: '',
    record_number: '',
  });

  const handleSearchChange = (event) => {
    setSearchFields((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    resetSearching();
    onEmployeesChange(searchFields.name, searchFields.record_number);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSearchFields({
      name: '',
      record_number: '',
    });
    resetSearching();
  };

  return (
    <div className='search-container'>
      <form onSubmit={handleSearchSubmit}>
        <div className='search-inputs'>
          <Input
            type='text'
            label='الاسم'
            id='name'
            name='name'
            handleChange={handleSearchChange}
            value={searchFields.name}
          />
          <Input
            type='number'
            label='رقم الحاسبة'
            id='record_number'
            name='record_number'
            handleChange={handleSearchChange}
            value={searchFields.record_number}
          />
        </div>
        <div className='search-actions'>
          <Button className='dark' type='submit'>
            بحث
          </Button>
          <Button className='dark' type='click' onClick={handleReset}>
            تفريغ
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
