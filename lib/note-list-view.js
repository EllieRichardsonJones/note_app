function NoteListView(noteList){
  this.noteList = noteList
}

NoteListView.prototype = (function() {
  function toHTML () {
    var arr = this.notelist.showNotes().map((note) => note.text)
    return '<ul><li><div>' + arr.join('</div></li><li><div>') + '</div></li></ul>'
  }

  return {
    toHTML: toHTML
  }
  
})() 