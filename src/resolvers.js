const User = require('./models/User');

const resolvers = {
  user: async ({ id }) => {
    return await User.findById(id);
  },
  users: async () => {
    return await User.find();
  },
  createUser: async ({ name, email }) => {
    const user = new User({ name, email });
    await user.save();
    return user;
  },
  updateUser: async ({ id, name, email }) => {
    const user = await User.findById(id);
    if (name) user.name = name;
    if (email) user.email = email;
    await user.save();
    return user;
  },
  deleteUser: async ({ id }) => {
    const user = await User.findByIdAndRemove(id);
    return user;
  },
};

module.exports = resolvers;
