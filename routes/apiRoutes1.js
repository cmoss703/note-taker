const notes = require('../db/notes');
const router = require('express').Router();

router.get("/notes", function (req, res) {
    notes.getNotes()
    .then((notes) => {
        return res.json(notes)
    }).catch((error) => res.status(500).json(error))
});

router.post("/notes", function (req, res) {
    notes.addNote(req.body)
    .then((note) => res.json(note))
    .catch((error) => res.status(500).json(error))
});

router.delete("/notes/:id", (req, res) => {
    notes.deleteNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch((error) => res.status(500).json(error))
});

module.exports = router;