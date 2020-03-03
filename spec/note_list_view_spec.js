describe('NoteListView',() => {
  describe('.toHTML',() => {
    it('outputs Notes to html string', () => {
      var noteList = new NoteList()
      noteList.createNote('This is a note')
      noteList.createNote('This is a second note')
      var NoteListView = new NoteListView(noteList)

      var expectedOutput = '<ul><li><div>This is a note</div></li><li><div>This is a second note</div></li></ul>'
      expect(NoteListView.toHTML()).toEq(expectedOutput)

    })
  })
})