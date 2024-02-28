import './ShowTable.scss';

const ShowTable = ({ data = [], columnsNames, actions }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(columnsNames);

  const renderHeader = () => {
    const titles = columns.map((col) => <th key={col}>{columnsNames[col]}</th>);
    const actionTitles = actions.map((action) => (
      <td key={action.actionName}>{action.actionName}</td>
    ));
    return [...titles, ...actionTitles];
  };

  const renderRows = data.map((item) => (
    <tr key={item.id}>
      {columns.map((col, index) => (
        <td key={`${col}${index}`}>{item[col]}</td>
      ))}
      {actions.map((action) => (
        <td
          key={action.actionName}
          className='action-td'
          onClick={action.actionFunc}
        >
          {action.actionIcon}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className='table-container'>
      <table className='styled-table'>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderRows}</tbody>
      </table>
    </div>
  );
};

export default ShowTable;
