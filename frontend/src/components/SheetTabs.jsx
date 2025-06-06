import { useState } from 'react';
import TableViewer from './TableViewer';

const SheetTabs = ({ sheets }) => {
  const sheetNames = Object.keys(sheets);
  const [activeTab, setActiveTab] = useState(sheetNames[0]);

  return (
    <div>
      <div className="flex space-x-2 border-b mb-4">
        {sheetNames.map(name => (
          <button
            key={name}
            onClick={() => setActiveTab(name)}
            className={`px-4 py-2 ${activeTab === name ? 'border-b-2 border-blue-500' : ''}`}
          >
            {name}
          </button>
        ))}
      </div>
      <TableViewer data={sheets[activeTab]} />
    </div>
  );
};

export default SheetTabs;
