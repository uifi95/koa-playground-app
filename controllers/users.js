const  { User } = require('../models/user');

module.exports = {
    getUsers(context) {
        User.findAll().then((users) => context.ok({ users }));
    },
    addUser(context) {
        let user = context.request.body;
        User.create(user).then(context.ok);
    },
    updateUser(context) {
        const requestBody = context.request.body;
        const id = requestBody.id;
        User.update(requestBody.user, { where: { id } }).then(context.ok);
    }
};
