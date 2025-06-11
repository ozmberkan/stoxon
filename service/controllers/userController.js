import {
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService,
  getMyInfoService,
} from "../services/userService.js";

export const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json({ success: true, message: "", data: users });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(parseInt(id));
    res.status(200).json({ success: true, message: "", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

export const updateUserController = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedUser = await updateUserService(parseInt(id), data);
    res.status(200).json({
      success: true,
      message: "Kullanıcı başarıyla güncellendi.",
      data: updatedUser,
    });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

export const deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUserService(parseInt(id));
    res.status(200).json({
      success: true,
      message: "Kullanıcı başarıyla silindi.",
      data: deletedUser,
    });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};

export const getMyInfoController = async (req, res) => {
  const { email } = req.user;
  try {
    const user = await getMyInfoService(email);
    res.status(200).json({ success: true, message: "", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message, success: false });
  }
};
