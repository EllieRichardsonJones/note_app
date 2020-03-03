describe('NoteList', () => {
  describe('.createNote', () => {
    it('Adds a note to the array', () => {
      var noteList = new NoteList()
      noteList.createNote('New note')
      expect(noteList.showNotes()[0]).isInstanceOf(Note)
    })
  })
})
