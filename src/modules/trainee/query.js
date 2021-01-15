import user from '../../service/user';

export default {
// eslint-disable-next-line arrow-body-style
  getAllTrainees: () => {
    return user.getAllUsers();
  },
  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  }
};
