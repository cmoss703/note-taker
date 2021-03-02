const Notes = require('../db/notes');
const router = require('express').Router();
// const fs = require('fs');
// const path = require('path');
// const { v4: uuidv4 } = require('uuid');

// router.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../db/db.json'));
// });

// router.post('/api/notes', (req, res) => {
//     let note = req.body;

//     new Notes(note)
// })

const fs = require('fs');
const path = require('path');
const db = require("../db/db.json");
const notes = require('../db/notes');
console.log(db);

module.exports = (router) => {
    router.get("/api/notes", function (req, res) {
        res.json(db);
    });

    app.post("/api/notes", function (req, res) {
        let note = req.body;
        // db.push(req.body);
        Notes.getNotes();
        Notes.read();
        Notes.addNote(note);
        // Add id for each note
        db.forEach((item, i) => {
            item.id = i + 1;
        });

        Notes.write(note);
        // fs.writeFile("./db/db.json", JSON.stringify(db), function() {
        //     res.json(db);
    });

    app.delete("/api/notes/:id", (req, res) => {
        var id = req.params.id;
        // Delete note from array
        db.splice(id - 1, 1);
        // Assign new ids to remaining notes
        db.forEach((item, i) => {
            item.id = i + 1;
        });

        Notes.deleteNote(id)
        // fs.writeFile("./db/db.json", JSON.stringify(db),
        //     res.json(notes));
    });
};
