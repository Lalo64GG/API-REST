const express = require('express');
const router = express.Router();
const departamentsController = require('../controllers/departament.controller');

router.post('/', departamentsController.create);
router.get('/', departamentsController.getAll);
router.get('/:id', departamentsController.getById);
router.patch('/:id', departamentsController.update);
router.delete('/:id', departamentsController.delete);

module.exports = router;