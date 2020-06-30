const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/auth.controller');
const models = require('../models');


module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    );
    next(); 
  });

  app.post('/student/register',
[],
  controller.register
  );

  app.post('api/auth/signin', controller.signin);
};