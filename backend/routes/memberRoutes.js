const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Member = require('../models/Member');

// Set up Multer for image storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// POST /members - Add a new team member
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const {
            name, rollNumber, year, degree, project,
            hobbies, certificate, internship, aim
        } = req.body;

        const newMember = new Member({
            name,
            rollNumber,
            year,
            degree,
            project,
            hobbies,
            certificate,
            internship,
            aim,
            image: req.file ? req.file.path : ''
        });

        await newMember.save();
        res.status(201).json(newMember);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /members - Get all team members
router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET /members/:id - Get a specific member by ID
router.get('/:id', async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        if (!member) return res.status(404).json({ message: 'Member not found' });
        res.json(member);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
