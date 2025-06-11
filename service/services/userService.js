import {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../repositories/userRepo.js";

export const getAllUsersService = async () => {
  try {
    return await getAllUsers();
  } catch (error) {
    throw new Error(`Error fetching users: ${error.message}`);
  }
};

export const getUserByIdService = async (id) => {
  try {
    const user = await getUserById(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    return user;
  } catch (error) {
    throw new Error(`Error fetching user: ${error.message}`);
  }
};

export const updateUserService = async (id, data) => {
  try {
    const updatedUser = await updateUser(id, data);
    if (!updatedUser) {
      throw new Error(`User with ID ${id} not found`);
    }
    return updatedUser;
  } catch (error) {
    throw new Error(`Error updating user: ${error.message}`);
  }
};

export const deleteUserService = async (id) => {
  try {
    const deletedUser = await deleteUser(id);
    if (!deletedUser) {
      throw new Error(`User with ID ${id} not found`);
    }
    return deletedUser;
  } catch (error) {
    throw new Error(`Error deleting user: ${error.message}`);
  }
};
