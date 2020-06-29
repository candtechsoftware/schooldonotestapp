const { auth } = require('../middlewares');
const controller = require('../controllers/user.controller');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next();  
  })

  app.get('/api/all', controller.allAccess);

  app.get('/api/student', [auth.verifyToken, auth.isStudent], controller.studentDash);
  app.get('/api/admin', [auth.verifyToken, auth.isAdmin], controller.adminDash);
};