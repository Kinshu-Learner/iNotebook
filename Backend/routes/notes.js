const express = require('express')
const router = express.Router();
let fetchuser = require('../middlewares/fetchuser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');

router.get('/fetchallnotes', fetchuser, async (req, resp) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        resp.json(notes);
    } catch (error) {
        console.error(error.message);
        resp.status(500).send("Internal Server Error");
    }
});

router.post('/addnote', fetchuser, [
    body("title", "Enter a valid Title").isLength({ min: 3 }),
    body("description", "Description must be at least 5 characters long").isLength({ min: 5 })
], async (req, resp) => {

    const { title, description, tag } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return resp.status(400).json({ errors: errors.array() });
    }

    try {

        let note = new Note({ title, description, tag, user: req.user.id });

        const savedNote = await note.save();

        resp.send(savedNote);

    } catch (error) {
        console.error(error.message);
        resp.status(500).send("Internal Server Error");
    }
});

router.put('/updatenote/:id', fetchuser, async (req, resp) => {

    const { title, description, tag } = req.body;

    const newNote = {};

    if (title) {
        newNote.title = title;
    }
    if (description) {
        newNote.description = description;
    }
    if (tag) {
        newNote.tag = tag;
    }

    let note = await Note.findById(req.params.id);
    if (!note) {
        resp.status(404).send("Not Found");
    }

    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    resp.json(note);

});

router.delete('/deletenote/:id', fetchuser, async (req, resp) => {

    const { title, description, tag } = req.body;

    try {
        let note = await Note.findById(req.params.id);

        if (!note) {
            resp.status(404).send("Not Found");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);
        resp.json({ "Success": "Note has been deleted successfully!", note: note });
    }
    catch (error) {
        console.error(error.message);
        resp.status(500).send("Internal Server Error");
    }

});

module.exports = router;