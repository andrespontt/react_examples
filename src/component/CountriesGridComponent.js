import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { getTransformedCountryData } from '../api/CountryApi';

const CountriesGridComponent = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columnDefs = [
    { headerName: 'Country', field: 'country' },
    { headerName: 'Code', field: 'code' },
    { headerName: 'ISO3', field: 'iso3' },
    { headerName: 'Year', field: 'year' },
    { headerName: 'Population', field: 'population' }
  ];

  useEffect(() => {
    getTransformedCountryData().then(data => {
      setRowData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 600, width: '100%' }}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={20}
        />
      )}
    </div>
  );
};

export default CountriesGridComponent;