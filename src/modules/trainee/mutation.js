import pubsub from '../pubsub';
import constant from '../../libs/constant';

export default {
  createTrainee: async (parent, args, context) => {
    const { payload: { email, name, password } } = args;
    const { dataSources: { traineeAPI } } = context;
    const addedTrainee = await traineeAPI.createTrainee({ email, name, password });
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addedTrainee.data });
    return addedTrainee.data;
  },
  updateTrainee: async (parent, args, context) => {
    const {
      payload: {
        email, id, name, role, password
      }
    } = args;
    const { dataSources: { traineeAPI } } = context;
    const updatedTrainee = await traineeAPI.updateTrainee({
      id, name, email, role, password
    });
    // eslint-disable-next-line max-len
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updatedTrainee.data.result });
    return updatedTrainee.data.result;
  },
  deleteTrainee: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const { payload: { id } } = args;
    const deletedID = await traineeAPI.deleteTrainee(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedID });
    return deletedID;
  }
};
