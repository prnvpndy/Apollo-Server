class User {
  constructor() {
    this.users = new Map();
    this.id = 0;
  }

  getAllUsers() {
    return this.users.values();
  }

  createUser(user) {
    this.id += 1;
    this.users.set(this.id, { ...user, id: this.id });
    return this.users.get(this.id);
  }

  updateUser(updateUser) {
    this.users.set(Number(updateUser.id), {
      ...updateUser
    });
    return this.users.get(Number(updateUser.id));
  }

  deleteUser(id) {
    this.users.delete(Number(id));
    return id;
  }

  getUser(id) {
    return this.users.get(Number(id));
  }
}
export default new User();
