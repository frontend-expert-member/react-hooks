import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/items/itemsSlice";

const AddItem = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addItem({ id: Date.now().toString(), data: input.trim() }));
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new item"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
