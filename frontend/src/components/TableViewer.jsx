import { useState } from 'react';

const TableViewer = ({ data }) => {
  const headers = Object.keys(data[0] || {});
  const [rowsToShow, setRowsToShow] = useState(10);

  return (
    <div>
      <div className="mb-2">
        <label>Rows: </label>
        <input
          type="number"
          value={rowsToShow}
          onChange={(e) => setRowsToShow(Number(e.target.value))}
          className="border px-2 py-1 w-16"
        />
      </div>
      <table className="table-auto w-full border">
        <thead>
          <tr>
            {headers.map(h => <th key={h} className="border px-4 py-2">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, rowsToShow).map((row, idx) => (
            <tr key={idx}>
              {headers.map(h => <td key={h} className="border px-4 py-2">{row[h]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableViewer;
