// ParentComponent.js
import React, { useState } from 'react';
import MyGridComponent from './MyGridComponent';

const ParentComponent = () => {
  const initialData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    // Add more initial data as needed
  ];

  const [newData, setNewData] = useState([
    { id: 3, name: 'Bob', age: 28 },
    { id: 4, name: 'Alice', age: 22 },
    // Add more new data as needed
  ]);

  // Function to update grid data
  const updateGridData = () => {
    setNewData([
      { id: 5, name: 'Charlie', age: 35 },
      { id: 6, name: 'Diana', age: 26 },
      // Add more updated data as needed
    ]);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={updateGridData}>Update Grid Data</button>
      <MyGridComponent initialData={newData} />
    </div>
  );
};

export default ParentComponent;
