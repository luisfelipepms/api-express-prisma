const router = require('express').Router();
const user = require('../controllers/auth.controller');
const limpeza = require('../controllers/limpeza.controller');
const auth = require('../middlewares/auth');

router.post('/', user.register);

router.post('/login', user.login);

router.get('/', auth, user.all);

router.post('/limpeza', auth, limpeza.insert);

router.get('/limpeza', auth, limpeza.all);

module.exports = router;