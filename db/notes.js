const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Notes {

    read() {
        return readFile('db/db.json', 'utf8')
    };
    
    write(note) {
        return writeFile('db/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read().then((notes) => {
            let myNotes 
            try{
                myNotes = [].concat(JSON.parse(notes))
            }
            catch(error) {
                myNotes = []
            }
            return myNotes
        })
    };

    addNote(note) {
        const {text, title} = note;
        if (!text || !title) {
            throw new Error('Error!')
        } 
        const newNote = {title, text};

        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote)
    };

    deleteNote(id) {
        return this.getNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes))
    }

};

module.exports = new Notes();