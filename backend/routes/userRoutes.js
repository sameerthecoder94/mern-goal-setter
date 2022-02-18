const express = require('express');
const router = express.Router();
const {
  resgisterUser,
  loginUser,
  getMe,
} = require('../controllers/registerController');

router.post('/', resgisterUser);
router.post('/login', loginUser);
router.get('/me', getMe);

module.exports = router;
