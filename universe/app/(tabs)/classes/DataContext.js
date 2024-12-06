import React, { createContext, useState, useContext } from "react";
import CLASSROOM_DATA from "../../data/ClassroomData.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(CLASSROOM_DATA);
  const [names, setNames] = useState([]);

  const addItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems.slice(0, -1), // Everything except last item
      newItem, // New item goes here
      prevItems[prevItems.length - 1], // Last item from original array
    ]);
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <DataContext.Provider value={{ items, addItem, deleteItem }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
