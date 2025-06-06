import { useState } from 'react';
import FileUploader from '../components/FileUploader';
import SheetTabs from '../components/SheetTabs';

export default function Home() {
  const [sheets, setSheets] = useState(null);

  return (
    <div className="min-h-screen min-w-screen bg-gray-50 px-4">
      <header className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center">
          Snowflake Excel Uploader
        </h1>
      </header>

      <main className="max-w-4xl mx-auto flex flex-col items-center">
        <FileUploader onDataReceived={setSheets} />
        {sheets && <SheetTabs sheets={sheets} />}
      </main>
    </div>
  );
}
