
import './ImageUpload2_bcd.css';
import React, { useState } from 'react';

function ImageUpload2() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file instanceof Blob) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please select a valid image file.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select an image file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/upload_bcd', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const resultData = await response.json();
        setResult(`Prediction: ${resultData.prediction}\nConfidence: ${resultData.confidence}%`);
        setError(null);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error uploading file.');
        setResult(null);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error uploading file.');
      setResult(null);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Breast Cancer Detection</h1>
        <p>Upload an ultrasound image to classify it as either "Normal", "Benign" or "Malignant".</p>
      </header>
      <main>
        <div className="container">
          <h2>Upload Image</h2>
          <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button type="submit">Upload</button>
          </form>
        </div>
        <div className="container">
          <h2>Image Preview</h2>
          {imagePreview && <img src={imagePreview} alt="Image Preview" id="imagePreview" />}
        </div>
        {result && (
          <div className="container">
            <h2>Result</h2>
            <p>{result}</p>
          </div>
        )}
        {error && (
          <div className="container">
            <h2>Error</h2>
            <p>{error}</p>
          </div>
        )}
      </main>
      <footer>
        <p>&copy; 2024 Breast Cancer Detection</p>
      </footer>
    </div>
  );
}

export default ImageUpload2;
