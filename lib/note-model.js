function Note(text) {
    this.text = text;
}

Note.prototype = (function () {
    function returnText () {
        return this.text
    }

    return {
        returnText: returnText
    }
})()




var note1 = new Note("New note")

Note.prototype.returnText = function(){
    console.log(this.text);
};

var note2 = new Note("Tesing")
