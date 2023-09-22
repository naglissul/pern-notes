const noteService = require("./service");

async function getAllNotes(req, res) {
  try {
    const data = await noteService.fetchAllNotes();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createNote(req, res) {
  const { name, title, content } = req.body;
  if (!name || !title || !content) {
    res.status(400).json({ error: "All fields required" });
  }

  try {
    const id = await noteService.createNewNote(req.body);

    res.status(201).json({ id: id[0].id, ...req.body });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function updateNote(req, res) {
  const { id, name, title, content } = req.body;
  if (!id || !name || !title || !content) {
    res.status(400).json({ error: "All fields required" });
  }

  try {
    const resultId = await noteService.updateExistingNote(req.body);

    if (resultId.length === 0) {
      res.status(400).json({ error: `Note with id=${id} does not exist` });
    } else {
      res.status(200).json(req.body);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteNote(req, res) {
  const id = req.params.id;
  if (id < 1) {
    res.status(400).json({ error: "Id must be positive" });
  }

  try {
    const resultId = await noteService.deleteExistingNote(id);

    if (resultId.length === 0) {
      res.status(400).json({ error: `Note with id=${id} does not exist` });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
