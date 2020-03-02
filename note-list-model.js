function NoteList() {
    this.notes = ["Hi", "Jack", "Dafna"];
}

var noteList1 = new NoteList()

NoteList.prototype.returnAllNotes = function(){
    console.log(this.notes);
};

NoteList.prototype.newNote = function(){
    note_1 = new Note("hi Jack")
    note_1.push(this.notes);
};