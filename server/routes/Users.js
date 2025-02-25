const express = require('express');
const { fetchUserById, updateUser } = require('../controller/User');

const router = express.Router();
//  /users is already added in base path
router.post('/own', fetchUserById)
      .patch('/:id', updateUser)

exports.router = router;
