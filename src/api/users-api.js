import axios from 'axios';

export const signin = async (username, password) => {
  try {
    const url = 'http://localhost:3030/api/users/login';
    const { data } = await axios.post(url, { username, password });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserById = async (userId, token) => {
  try {
    const url = `http://localhost:3030/api/users/${userId}`;
    const { data } = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async (token) => {
  try {
    const url = `http://localhost:3030/api/users`;
    const { data } = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    throw error;
  }
};

export const addUser = async (user, token) => {
  try {
    const url = `http://localhost:3030/api/users`;
    const { data } = await axios.post(
      url,
      { ...user },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

// export const updateUser = async (updatedUser, token) => {
//   try {
//     const url = `http://localhost:3030/api/users`;
//     const { data } = await axios.post(
//       url,
//       { ...user },
//       {
//         headers: { authorization: `Bearer ${token}` },
//       }
//     );
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

/*

router.post('/', checkRole(ROLE.ADMIN), userControler.addUser);

router.put('/:id', checkRole(ROLE.ADMIN), userControler.updateUser);

router.delete('/:id', checkRole(ROLE.ADMIN), userControler.deleteUser);
*/
