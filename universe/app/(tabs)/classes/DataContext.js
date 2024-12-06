import React, { createContext, useState, useContext } from "react";
import CLASSROOM_DATA from "../../data/ClassroomData.json";
import CLASSROOM_STUDENT_DATA from "../../data/ClassroomStudentData.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [classes, setClasses] = useState(CLASSROOM_DATA);
  const [names, setNames] = useState(CLASSROOM_STUDENT_DATA);

  const addClass = (newItem) => {
    setClasses((prevItems) => [
      ...prevItems.slice(0, -1), // Everything except last item
      newItem, // New item goes here
      prevItems[prevItems.length - 1], // Last item from original array
    ]);
  };

  const deleteClass = (itemId) => {
    setClasses((prevItems) =>
      prevItems.filter((classes) => classes.id !== itemId)
    );
  };

  const addName = (newItem) => {
    setNames((prevItems) => [
      ...prevItems.slice(0, -1), // Everything except last item
      newItem, // New item goes here
      prevItems[prevItems.length - 1], // Last item from original array
    ]);
  };

  const deleteName = (itemId) => {
    setNames((prevItems) => prevItems.filter((names) => names.name !== itemId));
  };

  return (
    <DataContext.Provider
      value={{ classes, addClass, deleteClass, names, addName, deleteName }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
