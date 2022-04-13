const fs = require("fs");

const getNotes = () => {
  return "Your Notes ";
};

const addnote = (title, body) => {
  const notes = loadnotes();

  const duplicateNote = notes.find(function (note) {
    return note.title === title;
  });

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    savenotes(notes);
    console.log("New Node added succesfully!");
  } 
  
  
  else 
  {
    console.log("Title already exist");
  }



};

const savenotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("Notes.json", dataJson);
};









const removeNote= (title) =>

{

  const notes = loadnotes()

const matchedNotes = notes.filter( function (note) {

return note.title !== title

})




if (notes.length > matchedNotes.length) {

  // console.log("No match found");

  console.log("note removed!");
}

else{

  // console.log("note removed!");

  console.log("No match found");
}
savenotes(matchedNotes)









}








const listNotes = () => {

  const notes = loadnotes()
  console.log("Your Notes are :-");

  notes.forEach((note) => {

    console.log(note.title);
    
  });
  
}


const readNote = (title) => {

  const notes = loadnotes()

  const note = notes.find((note) => note.title === title) 

  if (note) {

    console.log(note.title);
    console.log(note.body);
  }

  else {
    console.log("No Note Found");
  }





}


const loadnotes =() => {
  try {
    const databuffer = fs.readFileSync("Notes.json");

    const convertstring = databuffer.toLocaleString();

    return JSON.parse(convertstring);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addnote: addnote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
