import { useEffect, useState } from "react";
import NoteList from "./components/NoteList";

import { GET_NOTES_URL, INote } from "./constants";

function App() {
  const [notes, setNotes] = useState<INote[]>();

  useEffect(() => {
    fetch(GET_NOTES_URL, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>Notes App</h1>
      <NoteList notes={notes} />
    </>
  );
}

export default App;
