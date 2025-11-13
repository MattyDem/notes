const input = document.querySelector('.js-notesToBeAdded');
const list = document.querySelector('.js-listOfNotes');
const noteCount = document.querySelector('.noteCount');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function renderNotes() {
  list.innerHTML = '';
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.textContent = note;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'x';
    delBtn.classList.add('deleteButton');
    delBtn.onclick = () => deleteNote(index);

    noteDiv.appendChild(delBtn);
    list.appendChild(noteDiv);
  });
  noteCount.textContent = `Notes: ${notes.length}`;
  localStorage.setItem('notes', JSON.stringify(notes));
}

function addNotes() {
  const value = input.value.trim();
  if (value) {
    notes.push(value);
    input.value = '';
    renderNotes();
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  renderNotes();
}

const enter = document.querySelector('.js-notesToBeAdded')
enter.addEventListener('keydown',(event) => {
 if(event.key === 'Enter'){
	addNotes();
}
});

renderNotes();