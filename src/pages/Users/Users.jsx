import { useEffect, useState, useContext, useCallback } from 'react';

import { ShowTable, Modal, Button, AddUserForm } from '../../components';
import { AuthContext } from '../../context/auth-context';

import './Users.scss';
import { getAllUsers } from '../../api/users-api';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
    setEditMode(false);
    setIsModalOpen(false);
    getUsers();
  };

  const handleUserEdite = async (user) => {
    setEditMode(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role,
    });
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <Modal closeOverlay={closeModalHandler}>
          {
            <AddUserForm
              editMode={editMode}
              user={currentUser}
              closeOverlay={closeModalHandler}
            />
          }
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
              {
                actionName: 'edit',
                actionIcon: 'E',
                actionFunc: handleUserEdite,
              },
              { actionName: 'delete', actionIcon: 'D', actionFunc: () => null },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Users;
