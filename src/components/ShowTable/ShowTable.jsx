import './ShowTable.scss';

const ShowTable = ({ data = [], columnsNames }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(columnsNames);

  const renderHeader = columns.map((col) => (
    <th key={col}>{columnsNames[col]}</th>
  ));

  const renderRows = data.map((item) => (
    <tr key={item.id}>
      {columns.map((col, index) => (
        <td key={`${col}${index}`}>{item[col]}</td>
      ))}
      <td>E</td>
      <td>D</td>
    </tr>
  ));

  return (
    <div className='table-container'>
      <table className='styled-table'>
        <thead>
          <tr>
            {renderHeader}
            <th>تعديل</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  );
};

export default ShowTable;
