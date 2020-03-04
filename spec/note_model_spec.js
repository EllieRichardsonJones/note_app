describe('Note', () => {
  it('has text upon creation', () => {
    var newNote = new Note('this is a note')
    expect(newNote.returnText()).toEq('this is a note')
  })
})
