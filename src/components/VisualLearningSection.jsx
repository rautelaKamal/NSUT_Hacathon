import React, { useState, useRef } from 'react';

function VisualLearningSection({ darkMode, addMemory }) {
  const [images, setImages] = useState([]);
  const [reflections, setReflections] = useState('');
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    const imagePromises = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(file);
      });
    });
    
    Promise.all(imagePromises).then(results => {
      setImages([...images, ...results]);
    });
  };

  const handleReflectionChange = (e) => {
    setReflections(e.target.value);
  };

  const saveVisualMemory = () => {
    if (images.length > 0) {
      addMemory({
        type: 'visual',
        images: images,
        reflection: reflections,
        timestamp: new Date().toISOString()
      });
      
      // Clear the form
      setImages([]);
      setReflections('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <section className={`section visual-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-content">
        <h2>चक्षुरध्ययनम् (Visual Learning)</h2>
        <p className="shloka-meaning">"देखना अध्ययन है" - "Seeing is studying"</p>
        
        <div className="visual-upload">
          <h3>Upload Images for Visual Learning</h3>
          <input 
            type="file" 
            accept="image/*" 
            multiple 
            onChange={handleImageUpload} 
            ref={fileInputRef}
          />
          
          <div className="image-preview">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Upload ${index + 1}`} />
            ))}
          </div>
          
          <textarea
            placeholder="Share your reflections on what you see..."
            value={reflections}
            onChange={handleReflectionChange}
            rows={5}
          />
          
          <button 
            className="save-button"
            onClick={saveVisualMemory}
            disabled={images.length === 0}
          >
            Save Visual Experience
          </button>
        </div>
      </div>
    </section>
  );
}

export default VisualLearningSection;