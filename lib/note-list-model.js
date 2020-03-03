'use strict'

function NoteList() {
    this.noteList = []
};

NoteList.prototype = (function () {
    function createNote (text) {
        var note = new Note(text)
        this.noteList.push(note)
    }

    function showNotes () {
        return this.noteList
    }

    return {
        createNote: createNote,
        showNotes: showNotes
    }

})()
