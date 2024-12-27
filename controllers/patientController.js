const Patient = require('../models/Patient');

// Récupérer tous les patients
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Récupérer les patients en attente
exports.getPendingPatients = async (req, res) => {
    try {
        const pendingPatients = await Patient.find({ status: 'pending' });
        res.status(200).json(pendingPatients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Ajouter un patient
exports.createPatient = async (req, res) => {
    const { name, age, condition, professional } = req.body;
    try {
        const newPatient = new Patient({ name, age, condition, professional });
        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Mettre à jour un patient
exports.updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedPatient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Supprimer un patient
exports.deletePatient = async (req, res) => {
    try {
        await Patient.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Patient supprimé' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
