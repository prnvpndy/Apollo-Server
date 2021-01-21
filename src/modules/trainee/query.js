import user from '../../service/user';

export default {
// eslint-disable-next-line arrow-body-style
  getAllTrainees: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees();
    return response.Trainees;
  },

  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  }
};
