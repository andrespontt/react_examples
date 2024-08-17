// MyGridComponent.js
import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const MyGridComponent = ({ initialData }) => {
  const [rowData, setRowData] = useState(initialData);

  // This effect will update the grid data when the prop changes
  useEffect(() => {
    setRowData(initialData);
  }, [initialData]);

  const columnDefs = [
    { headerName: 'ID', field: 'id', flex: 1 },
    { headerName: 'Name', field: 'name', flex: 1 },
    { headerName: 'Age', field: 'age', flex: 1 },
    // Add more columns as needed
  ];

  return (
    <div className="ag-theme-alpine-dark" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
  );
};

export default MyGridComponent;
