var NoteListView = function(noteList){
  this.noteList = noteList
}

NoteListView.prototype.toHTML = function(noteList) {
  var arr = this.noteList.showNotes().map((note) => note.text)
  return '<ul><li><div>' + arr.join('</div></li><li><div>') + '</div></li></ul>'
}
