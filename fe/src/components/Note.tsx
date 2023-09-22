import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { DELETE_NOTE_URL, INote, IStyle } from "../constants";

const tableStyle: IStyle = {
  border: "1px solid black",
  borderCollapse: "collapse",
  padding: "5px",
};

const editNote = (id: number) => {
  alert("One day this gonna edit something...");
};

const deleteNote = (id: number) => {
  fetch(DELETE_NOTE_URL(id), { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        alert("Deleted successfully. Refresh to see changes");
      } else {
        throw Error(`Delete error. code: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

function Note({ id, name, title, content }: INote) {
  return (
    <div style={{ margin: "10px", textAlign: "right" }}>
      <table style={tableStyle}>
        <tbody>
          <tr style={tableStyle}>
            <th style={tableStyle}>{title}</th>
          </tr>
          <tr style={tableStyle}>
            <td style={tableStyle}>by {name}</td>
          </tr>
          <tr style={tableStyle}>
            <td style={tableStyle}>{content}</td>
          </tr>
        </tbody>
      </table>

      <button style={{ margin: "2px" }} onClick={() => editNote(id)}>
        <BiEditAlt />
      </button>
      <button style={{ margin: "2px" }} onClick={() => deleteNote(id)}>
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}

export default Note;
