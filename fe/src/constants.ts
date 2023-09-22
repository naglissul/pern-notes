export const GET_NOTES_URL = `http://${process.env.REACT_APP_APIHOST}:${process.env.REACT_APP_APIPORT}/api/notes`;
export const DELETE_NOTE_URL = (id: number) =>
  `http://${process.env.REACT_APP_APIHOST}:${process.env.REACT_APP_APIPORT}/api/notes/${id}`;
export const PUT_NOTE_URL = `http://${process.env.REACT_APP_APIHOST}:${process.env.REACT_APP_APIPORT}/api/notes`;
export const POST_NOTE_URL = `http://${process.env.REACT_APP_APIHOST}:${process.env.REACT_APP_APIPORT}/api/notes`;

export interface IStyle {
  [key: string]: string;
}

export interface INote {
  id: number;
  name: string;
  title: string;
  content: string;
}
