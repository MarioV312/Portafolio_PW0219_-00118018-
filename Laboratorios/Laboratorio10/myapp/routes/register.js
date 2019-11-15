var express = require('express');
var router = express.Router;

const registerController = require('../controllers/RegisterController');

//GET
router.get('/', registerController.getAll);
router.get('/:id', registerController.getOneById);

//PUT
router.put('/update/:id', registerController.updateById);

//POST
router.post('/register', registerController.insert);


