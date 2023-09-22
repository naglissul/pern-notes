import { GET_NOTES_URL } from "../constants";
import { setAllNotes } from "../redux/notesSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const fetchAllNotes = async (dispatch: Dispatch) => {
  try {
    const response = await fetch(GET_NOTES_URL, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      dispatch(setAllNotes(await response.json()));
    } else {
      alert("Something went wrong. Please try again");
    }
  } catch (error) {
    alert("Oops, server error");
  }
};
