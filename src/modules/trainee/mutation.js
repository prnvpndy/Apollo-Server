/* eslint-disable no-unused-vars */
import userInstance from '../../service/user';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    return userInstance.createUser(user);
  },
  updateTrainee: (parent, args, context) => {
    const {
      updateUser
    } = args;
    console.log('hah', userInstance.updateUser(updateUser));
    return userInstance.updateUser(updateUser);
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    return userInstance.deleteUser(id);
  }
};
