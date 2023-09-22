import { createSlice } from "@reduxjs/toolkit";
import { INote } from "../constants";

interface INoteState {
  allNotes: INote[];
}

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    allNotes: [],
  },
  reducers: {
    setAllNotes: (state, action) => {
      state.allNotes = action.payload;
    },
  },
});

export const { setAllNotes } = notesSlice.actions;
export const selectAllNotes = (state: INoteState) => state.allNotes;

export default notesSlice.reducer;
