import { useEffect, useState } from 'react';

import { ShowTable, Modal, Button } from '../../components';

import './Users.scss';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setUsers(data);
  }, []);

  const openModalHandler = (doc) => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <Modal closeOverlay={closeModalHandler}>{<h1>Hi there</h1>}</Modal>
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

const data = [
  {
    id: 2,
    name: 'User1',
    username: 'user1',
    password: '$2a$12$jM2cES8DS4HFK5BLyfgIyu5vjQsyJ1R8UA94/oXR/2/Kuk6hyzDMy',
    role: '1',
    createdAt: '2024-02-07T20:04:11.172Z',
    updatedAt: '2024-02-07T20:04:11.172Z',
  },
  {
    id: 3,
    name: 'User2',
    username: 'user2',
    password: '$2a$12$RE8kt9yuex.v3U/to59LnOBH2TarOYbI8JbvrVy2mAyD68iumHlbq',
    role: '2',
    createdAt: '2024-02-09T19:26:43.409Z',
    updatedAt: '2024-02-09T19:26:43.409Z',
  },
];
