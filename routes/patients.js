const express = require('express');
const {
    getAllPatients,
    getPendingPatients,
    createPatient,
    updatePatient,
    deletePatient,
} = require('../controllers/patientController');

const router = express.Router();

router.get('/', getAllPatients);
router.get('/pending', getPendingPatients);
router.post('/', createPatient);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;
