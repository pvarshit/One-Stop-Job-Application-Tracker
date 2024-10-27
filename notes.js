document.addEventListener("DOMContentLoaded", () => {
    const addNoteBtn = document.getElementById("add-note-btn");
    const newNoteText = document.getElementById("new-note");
    const notesList = document.querySelector(".notes-list");

    // Load notes from local storage
    const loadNotes = () => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notesList.innerHTML = "";
        notes.forEach((note, index) => {
            createNoteElement(note, index);
        });
    };

    // Save notes to local storage
    const saveNotes = (notes) => {
        localStorage.setItem("notes", JSON.stringify(notes));
    };

    // Create a new note element
    const createNoteElement = (note, index) => {
        const noteCard = document.createElement("div");
        noteCard.classList.add("note-card");

        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button class="btn-secondary edit-btn" data-index="${index}">Edit</button>
            <button class="btn-secondary delete-btn" data-index="${index}">Delete</button>
        `;

        notesList.appendChild(noteCard);
    };

    // Add a new note
    addNoteBtn.addEventListener("click", () => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const content = newNoteText.value.trim();
        
        if (content) {
            const title = prompt("Enter a title for your note:");
            const newNote = { title: title || "Untitled", content };
            notes.push(newNote);
            saveNotes(notes);
            createNoteElement(newNote, notes.length - 1);
            newNoteText.value = ""; // Clear the input
        } else {
            alert("Please enter some content for the note.");
        }
    });

    // Edit or delete notes
    notesList.addEventListener("click", (event) => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        const target = event.target;
        const index = target.getAttribute("data-index");

        if (target.classList.contains("edit-btn")) {
            // Edit note
            const newContent = prompt("Edit your note:", notes[index].content);
            if (newContent !== null) {
                notes[index].content = newContent;
                saveNotes(notes);
                loadNotes();
            }
        } else if (target.classList.contains("delete-btn")) {
            // Delete note
            notes.splice(index, 1);
            saveNotes(notes);
            loadNotes();
        }
    });

    // Initial load
    loadNotes();
});
