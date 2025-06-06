import axios from 'axios';

const API_BASE = import.meta.env.VITE_BASE_API_URL;

export const uploadFileToStage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  console.log(formData);

  const response = await axios.post(`${API_BASE}/upload`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  console.log(response);
  return response.data; // should return { stage, filename }
};

export const requestParsedData = async ({ stage, filename }) => {
  const response = await axios.post(`${API_BASE}/parse`, { stage, filename });
  return response.data; // expected to be { sheet1: [...], sheet2: [...] }
};
