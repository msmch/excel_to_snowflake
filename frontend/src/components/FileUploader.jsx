import { useDropzone } from 'react-dropzone';
import { uploadFileToStage, requestParsedData } from '../utils/api';

const FileUploader = ({ onDataReceived }) => {
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      const { stage, filename } = await uploadFileToStage(file);
      const parsedData = await requestParsedData({ stage, filename });

      onDataReceived(parsedData);
    } catch (error) {
      console.error('Upload or parsing failed', error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="w-full h-64 border-1 border-dashed border-gray-100 rounded-xl shadow-sm bg-gray-50 hover:bg-gray-100 flex flex-col justify-between items-center p-6 cursor-pointer transition"
    >
      <input {...getInputProps()} />

      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-gray-500">Drag & drop your file</p>
      </div>

      <button
        type="button"
        className="mt-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-400"
      >
        Select File
      </button>
    </div>
  );
};

export default FileUploader;
