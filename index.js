let noteList = JSON.parse(localStorage.getItem('notes')) || [];
			function saveNotes(){
				localStorage.setItem('notes', JSON.stringify(noteList));
			}
			
			function renderNotes(){
			
			let noteListHTML = '';
			
			for(let i = 0; i < noteList.length; i++){			const addedNotes = noteList[i];
			const html = `<p>${addedNotes} <button onclick='deleteNote(${i});' class='deleteButton'>Delete</button></p>`;
			noteListHTML += html;
			
			};
			
			document.querySelector('.js-listOfNotes')
			.innerHTML = noteListHTML;
			renderCount();
			
			}
			
			
			function addNotes(){
			const innerElement = document.querySelector('.js-notesToBeAdded');
			const notes = innerElement.value;
			if (notes === '') return;
			
			noteList.push(notes);
			
			innerElement.value = '';
			
			saveNotes();
			renderNotes();
			
			}
			
			function deleteNote(index){
			noteList.splice(index, 1);
			saveNotes();
			renderNotes();
			}
			
			const enter = document.querySelector('.js-notesToBeAdded');
			enter.addEventListener('keydown', (event) => {
			if (event.key === 'Enter'){
			addNotes();
			
			}
			});
			
			
			function renderCount(){
				const count = noteList.length;
				const noteWord = count === 1 ? 'Note' : 'Notes'
				
				document.querySelector('.noteCount')
			.innerHTML = `${count} ${noteWord} listed`
			}
			
			renderNotes();