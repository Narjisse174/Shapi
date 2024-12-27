const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    condition: { type: String, required: true },
    professional: { type: String, required: true },
    status: { type: String, enum: ['pending', 'treated'], default: 'pending' },
});

module.exports = mongoose.model('Patient', PatientSchema);
