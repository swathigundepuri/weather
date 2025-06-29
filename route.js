const express = require('express');
const router = express.Router();
const Plant = require('../models/plant');

// Get plant recommendations
router.get('/recommend', async (req, res) => {
    const { plantName, gardenSize } = req.query;
    try {
        const plants = await Plant.find({ name: new RegExp(plantName, 'i') });
        res.json(plants);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
