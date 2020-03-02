function NoteList() {
    this.notes = ["Hi", "Jack", "Dafna"];
}

var noteList1 = new NoteList()

NoteList.prototype.returnAllNotes = function(){
    console.log(this.notes);
};

NoteList.prototype.newNote = function(content){
    var note_1 = new Note(content)
    this.notes.push(note_1);
    console.log(this.notes);
};
 notelist = new NoteList();
 noteList1.newNote("buy Milk")
