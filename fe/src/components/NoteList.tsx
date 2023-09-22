import { INote, IStyle, POST_NOTE_URL } from "../constants";
import Note from "./Note";
import { BsPlusSquare } from "react-icons/bs";

const addButtonStyle: IStyle = {
  width: "50px",
  height: "50px",
  alignSelf: "center",
  marginLeft: "20px",
};

const createNote = () => {
  fetch(POST_NOTE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Petras",
      title: "Pirmadienį",
      content: "Išsikept šašlykų reiktu. visai noreciau",
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert(
          "Added random note successfully (one day you can customize the note). Refresh to see changes"
        );
      } else {
        throw Error(`Post error. code: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

function NoteList({ notes }: { notes: INote[] | undefined }) {
  return (
    <div style={{ display: "flex" }}>
      {notes?.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          name={note.name}
          title={note.title}
          content={note.content}
        />
      ))}
      <button style={addButtonStyle} onClick={() => createNote()}>
        <BsPlusSquare style={{ fontSize: "25px" }} />
      </button>
    </div>
  );
}
export default NoteList;
