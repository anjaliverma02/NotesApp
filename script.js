let notes =
JSON.parse(localStorage.getItem("notes")) || [];


showNotes();



function addNote(){

let input =
document.getElementById("noteInput");


if(input.value===""){

alert("Write something");
return;

}


notes.push(input.value);


localStorage.setItem(
"notes",
JSON.stringify(notes)
);


input.value="";


showNotes();

}



function showNotes(){


let notesBox =
document.getElementById("notes");


notesBox.innerHTML="";


notes.forEach((note,index)=>{


notesBox.innerHTML += `

<div class="note">

<p>${note}</p>

<button class="delete"
onclick="deleteNote(${index})">

Delete

</button>

</div>

`;

});

}




function deleteNote(index){


notes.splice(index,1);


localStorage.setItem(
"notes",
JSON.stringify(notes)
);


showNotes();

}
