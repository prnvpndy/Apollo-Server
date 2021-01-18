import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../libs/constant';

export default {
  createTrainee: (parent, args, context) => {
    const { user } = args;
    const addedUser = userInstance.createUser(user);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addedUser });
    return addedUser;
  },
  updateTrainee: (parent, args, context) => {
    const {
      updateUser
    } = args;
    console.log('hah', userInstance.updateUser(updateUser));
    pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateUser });
    return userInstance.updateUser(updateUser);
  },
  deleteTrainee: (parent, args, context) => {
    const { id } = args;
    const deletedID = userInstance.deleteUser(id);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deletedID });
    return deletedID;
  }
};
