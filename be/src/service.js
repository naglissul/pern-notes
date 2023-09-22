const pool = require("./database");

async function fetchAllNotes() {
  let client;
  try {
    client = await pool.connect();

    const result = await client.query("SELECT * FROM notes;");

    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

async function createNewNote(newNote) {
  let client;
  const { name, title, content } = newNote;
  try {
    client = await pool.connect();

    const result = await client.query(
      "INSERT INTO notes(name, title, content) VALUES ($1, $2, $3) RETURNING id;",
      [name, title, content]
    );

    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

async function updateExistingNote(updatedNote) {
  let client;
  const { id, name, title, content } = updatedNote;

  try {
    client = await pool.connect();

    const result = await client.query(
      "UPDATE notes SET id=$1, name=$2, title=$3, content=$4 WHERE id=$1 RETURNING id;",
      [id, name, title, content]
    );

    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

async function deleteExistingNote(id) {
  let client;
  try {
    client = await pool.connect();

    const result = await client.query(
      "DELETE FROM notes WHERE id=$1 RETURNING id;",
      [id]
    );

    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (client) {
      client.release();
    }
  }
}

module.exports = {
  fetchAllNotes,
  createNewNote,
  updateExistingNote,
  deleteExistingNote,
};
