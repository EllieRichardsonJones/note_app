describe('Note', () => {
  it('has text upon creation', () => {
    var newNote = new Note('this is a note')
    expect(newNote.returnText()).toEq('this is a note')
  })
})


// var assert = {
//   isTrue: function(assertionToCheck){
//     if(!assertionToCheck){
//       throw new Error("Assertion FAILED"+ assertionToCheck + "is not truthy")
//     }
//     else console.log("Test Passing")
//   }
// }
// assert.isTrue(3>4)