const Router = require('koa-router');
const router = new Router();
const UsersController = require('../controllers/users');

router
    .get('/', UsersController.getUsers)
    .post('/', UsersController.addUser)
    .put('/', UsersController.updateUser);

module.exports = router.routes();
