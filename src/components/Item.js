import React from "react";
import { useDispatch } from "react-redux";
import itemsSlice, {
  deleteItem,
  updateItem,
} from "../features/items/itemsSlice";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  };

  const handleUpdate = () => {
    const newData = prompt("Enter new data:", item.data);
    if (newData) {
      dispatch(updateItem({ id: item.id, newData: { data: newData } }));
    }
  };

  return (
    <div>
      <span>{item.data}</span>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Item;
