import user from '../../service/user';

export default {
// eslint-disable-next-line arrow-body-style
  getAllTrainees: async (parent, args, context) => {
    console.log('Inside gettAll trainees of Apollo');
    const { payload: { skip, limit } } = args;
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees({ skip, limit });
    console.log('res :', response);
    return response;
  },

  getTrainee: (parent, args) => {
    const { id } = args;
    return user.getUser(id);
  }
};
