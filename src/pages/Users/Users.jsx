import { useEffect, useState, useContext, useCallback } from 'react';

import { ShowTable, Modal, Button, AddUserForm } from '../../components';
import { AuthContext } from '../../context/auth-context';

import './Users.scss';
import { getAllUsers } from '../../api/users-api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    user: { token },
  } = useContext(AuthContext);

  const getUsers = useCallback(async () => {
    const data = await getAllUsers(token);
    setUsers(data);
  }, [token]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const openModalHandler = (doc) => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
    getUsers();
  };

  return (
    <>
      {isModalOpen && (
        <Modal closeOverlay={closeModalHandler}>
          {<AddUserForm closeOverlay={closeModalHandler} />}
        </Modal>
      )}
      <div className='users-page-container'>
        <div className='users-add-action'>
          <Button onClick={openModalHandler}>اضافة مستخدم جديد</Button>
        </div>
        <div className='users-show-table'>
          <ShowTable
            data={users}
            columnsNames={{
              id: 'ت',
              name: 'الاسم',
              username: 'اسم المستخدم',
              role: 'الصلاحيات',
            }}
            actions={[
              { actionName: 'edit', actionIcon: 'E', actionFunc: () => null },
              { actionName: 'delete', actionIcon: 'D', actionFunc: () => null },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
