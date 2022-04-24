import React, { useState } from "react";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    return props.onAdd(note), setNote({ title: "", content: "" });
  }

  const [isExpanded, setIsExpanded] = useState(false);
  function handleClick() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form>
        <input
          onClick={handleClick}
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        {isExpanded && (
          <textarea
            value={note.content}
            onChange={handleChange}
            name="content"
            placeholder="Take a note..."
            rows="3"
          />
        )}

        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
