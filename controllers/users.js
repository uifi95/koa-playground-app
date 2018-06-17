
const users = [];

module.exports = {
    getUsers(context) {
        context.ok({ users });
    },
    addUser(context) {
        let user = context.request.body;
        users.push(user);
        context.ok();
    },
    updateUser(context) {
        const requestBody = context.request.body;
        const id = requestBody.id;
        const index = users.indexOf(users.find(function (user) { return user.id === id }));
        users[index] = requestBody.user;
        context.ok();
    }
};
