// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './ImageUpload.css'; // Import the CSS file
// import NavigationBar from "../NavigationBar/NavigationBar.js";
// import Footer from "../Footer/Footer.js";

// const ImageUpload = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);

//     // Generate a preview of the image
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     } else {
//       setImagePreview(null);
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedImage) return;

//     const formData = new FormData();
//     formData.append('image', selectedImage);

//     try {
//       const response = await axios.post('http://localhost:3001/pcos-detection', formData);
//       const result = response.data;
//       navigate('/pcos-detection/result', { state: { result } });
//     } catch (error) {
//       console.error('Error uploading the image:', error);
//     }
//   };

//   return (
//     <div className="upload-container">
//       {<NavigationBar />}
//       <div className="section title-section">
//         <h1>PCOS Detection</h1>
//         <p className="subtitle">Upload your ultrasound image for detection</p>
//       </div>

//       {/* Second Section */}
//       <div className="section upload-section">
//         <div className="file-container">
//           <input type="file" onChange={handleImageChange} />
//         </div>
//         <div className="image-preview-container">
//           <h2 className="image-preview-title">Image Preview</h2>
//           {imagePreview && (
//             <div className="image-container">
//               <img src={imagePreview} alt="Selected Preview" />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Third Section: Placeholder for footer */}
//       <div className="section footer-section">
//         {<Footer/>}
//       </div>

//       <button onClick={handleUpload} disabled={!selectedImage}>
//         Upload
//       </button>
//     </div>
//   );
// };

// export default ImageUpload;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './ImageUpload.css'; // Import the CSS file
// import NavigationBar from "../NavigationBar/NavigationBar.js";
// import Footer from "../Footer/Footer.js";

// const ImageUpload = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [error, setError] = useState(null); // Added state for error handling
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedImage(file);

//     // Generate a preview of the image
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     } else {
//       setImagePreview(null);
//     }
//   };

//   const handleUpload = async () => {
//     if (!selectedImage) return;

//     const formData = new FormData();
//     formData.append('image', selectedImage);

//     try {
//       const response = await axios.post('http://localhost:3001/pcos-detection', formData);
//       const result = response.data;
//       navigate('/pcos-detection/result', { state: { result } });
//     } catch (error) {
//       setError('Error uploading the image. Please try again.');
//       console.error('Error uploading the image:', error);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <NavigationBar />
//       <div className="section title-section">
//         <h1>PCOS Detection</h1>
//         <p className="subtitle">Upload your ultrasound image for detection</p>
//       </div>

//       {/* Second Section */}
//       <div className="section upload-section">
//         <div className="file-container">
//           <input type="file" onChange={handleImageChange} />
//         </div>
//         <div className="image-preview-container">
//           <h2 className="image-preview-title">Image Preview</h2>
//           {imagePreview && (
//             <div className="image-container">
//               <img src={imagePreview} alt="Selected Preview" />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && <p className="error-message">{error}</p>}

//       <div className="section footer-section">
//         <Footer />
//       </div>

//       <button onClick={handleUpload} disabled={!selectedImage}>
//         Upload
//       </button>
//     </div>
//   );
// };

// export default ImageUpload;

// src/components/ImageUpload.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button } from 'react-bootstrap';

// const ImageUpload = () => {
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!image) return;

//     const formData = new FormData();
//     formData.append('file', image);

//     setLoading(true);
//     try {
//       const response = await axios.post('http://localhost:5000/pcos-detection', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Navigate to results page with the prediction result
//       navigate('/result', { state: { result: response.data.result } });
//     } catch (error) {
//       alert(error.message);
//       console.error('Error uploading image:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container>
//       <h1>Upload Image for PCOS Detection</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Choose Image</Form.Label>
//           <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
//         </Form.Group>
//         <Button type="submit" disabled={loading}>
//           {loading ? 'Uploading...' : 'Upload'}
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default ImageUpload;



// import React, { useState } from 'react';

// function ImageUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);

//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       alert('Please select an image file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const response = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const resultData = await response.json();
//         setResult(`Prediction: ${resultData.prediction}\nConfidence: ${resultData.confidence}%`);
//         setError(null); // Clear previous errors
//       } else {
//         const errorData = await response.json();
//         setError(errorData.error || 'Error uploading file.');
//         setResult(null); // Clear previous results
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Error uploading file.');
//       setResult(null); // Clear previous results
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>PCOS Detection</h1>
//         <p>Upload an ultrasound image to classify it as either "Normal" or "PCOS".</p>
//       </header>
//       <main>
//         <div className="container">
//           <h2>Upload Image</h2>
//           <form onSubmit={handleSubmit}>
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             <button type="submit">Upload</button>
//           </form>
//         </div>
//         <div className="container">
//           <h2>Image Preview</h2>
//           {imagePreview && <img src={imagePreview} alt="Image Preview" id="imagePreview" />}
//         </div>
//         {result && (
//           <div className="container">
//             <h2>Result</h2>
//             <p>{result}</p>
//           </div>
//         )}
//         {error && (
//           <div className="container">
//             <h2>Error</h2>
//             <p>{error}</p>
//           </div>
//         )}
//       </main>
//       <footer>
//         <p>&copy; 2024 PCOS Detection</p>
//       </footer>
//     </div>
//   );
// }

// export default ImageUpload;


// import React, { useState } from 'react';

// function ImageUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);

//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       alert('Please select an image file.');
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append('file', selectedFile);
  
//     try {
//       const response = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });
  
//       // Log the response text to check its format
//       const responseText = await response.text();
//       console.log('Response Text:', responseText);
  
//       // Parse the response if it's valid JSON
//       const resultData = JSON.parse(responseText);
//       setResult(`Prediction: ${resultData.prediction}\nConfidence: ${resultData.confidence}%`);
//       setError(null); // Clear previous errors
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Error uploading file.');
//       setResult(null); // Clear previous results
//     }
//   };
  

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   if (!selectedFile) {
//   //     alert('Please select an image file.');
//   //     return;
//   //   }

//   //   const formData = new FormData();
//   //   formData.append('file', selectedFile);

//   //   try {
//   //     const response = await fetch('http://localhost:5000/upload', {
//   //       method: 'POST',
//   //       body: formData,
//   //     });

//   //     if (response.ok) {
//   //       const resultData = await response.json();
//   //       setResult(`Prediction: ${resultData.prediction}\nConfidence: ${resultData.confidence}%`);
//   //       setError(null); // Clear previous errors
//   //     } else {
//   //       const errorData = await response.json();
//   //       setError(errorData.error || 'Error uploading file.');
//   //       setResult(null); // Clear previous results
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //     setError('Error uploading file.');
//   //     setResult(null); // Clear previous results
//   //   }
//   // };

//   return (
//     <div className="App">
//       <header>
//         <h1>PCOS Detection</h1>
//         <p>Upload an ultrasound image to classify it as either "Normal" or "PCOS".</p>
//       </header>
//       <main>
//         <div className="container">
//           <h2>Upload Image</h2>
//           <form onSubmit={handleSubmit}>
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             <button type="submit">Upload</button>
//           </form>
//         </div>
//         <div className="container">
//           <h2>Image Preview</h2>
//           {imagePreview && <img src={imagePreview} alt="Image Preview" id="imagePreview" />}
//         </div>
//         {result && (
//           <div className="container">
//             <h2>Result</h2>
//             <p>{result}</p>
//           </div>
//         )}
//         {error && (
//           <div className="container">
//             <h2>Error</h2>
//             <p>{error}</p>
//           </div>
//         )}
//       </main>
//       <footer>
//         <p>&copy; 2024 PCOS Detection</p>
//       </footer>
//     </div>
//   );
// }

// export default ImageUpload;



// import React, { useState } from 'react';

// function ImageUpload() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file && file instanceof Blob) { // Ensure file is a Blob
//       setSelectedFile(file);

//       const reader = new FileReader();
//       reader.onload = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       alert('Please select a valid image file.');
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!selectedFile) {
//       alert('Please select an image file.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', selectedFile);

//     try {
//       const response = await fetch('http://localhost:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const resultData = await response.json();
//         setResult(`Prediction: ${resultData.prediction}\nConfidence: ${resultData.confidence}%`);
//         setError(null); // Clear previous errors
//       } else {
//         const errorData = await response.json();
//         setError(errorData.error || 'Error uploading file.');
//         setResult(null); // Clear previous results
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Error uploading file.');
//       setResult(null); // Clear previous results
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>PCOS Detection</h1>
//         <p>Upload an ultrasound image to classify it as either "Normal" or "PCOS".</p>
//       </header>
//       <main>
//         <div className="container">
//           <h2>Upload Image</h2>
//           <form onSubmit={handleSubmit}>
//             <input type="file" accept="image/*" onChange={handleFileChange} />
//             <button type="submit">Upload</button>
//           </form>
//         </div>
//         <div className="container">
//           <h2>Image Preview</h2>
//           {imagePreview && <img src={imagePreview} alt="Image Preview" id="imagePreview" />}
//         </div>
//         {result && (
//           <div className="container">
//             <h2>Result</h2>
//             <p>{result}</p>
//           </div>
//         )}
//         {error && (
//           <div className="container">
//             <h2>Error</h2>
//             <p>{error}</p>
//           </div>
//         )}
//       </main>
//       <footer>
//         <p>&copy; 2024 PCOS Detection</p>
//       </footer>
//     </div>
//   );
// }

// export default ImageUpload;













import './ImageUpload2.css';
import React, { useState } from 'react';

function ImageUpload() {
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
      const response = await fetch('http://localhost:5000/upload', {
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
        <h1>PCOS Detection</h1>
        <p>Upload an ultrasound image to classify it as either "Normal" or "PCOS".</p>
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
        <p>&copy; 2024 PCOS Detection</p>
      </footer>
    </div>
  );
}

export default ImageUpload;
