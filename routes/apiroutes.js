const Notes = require('../db/notes');
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const db = require("../db/db.json");

// module.exports = (router) => {
router.get("/api/notes", function (req, res) {
    res.json(db);
});

router.post("/api/notes", function (req, res) {
    let note = req.body;

    Notes.getNotes();
    Notes.read();
    Notes.addNote(note);

    db.forEach((item, i) => {
        item.id = i + 1;
    });

    Notes.write(note);

});

router.delete("/api/notes/:id", (req, res) => {
    var id = req.params.id;

    Notes.deleteNote(id)

});

module.exports = router;