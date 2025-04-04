import React, { useState, useRef } from 'react';

function AudioLearningSection({ darkMode, addMemory }) {
  const [audioRecordings, setAudioRecordings] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [audioReflection, setAudioReflection] = useState('');
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioRecordings([...audioRecordings, audioUrl]);
      };
      
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please check your permissions.');
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };
  
  const handleReflectionChange = (e) => {
    setAudioReflection(e.target.value);
  };
  
  const saveAudioMemory = () => {
    if (audioRecordings.length > 0) {
      addMemory({
        type: 'audio',
        recordings: audioRecordings,
        reflection: audioReflection,
        timestamp: new Date().toISOString()
      });
      
      // Clear the form
      setAudioRecordings([]);
      setAudioReflection('');
    }
  };

  return (
    <section className={`section audio-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-content">
        <h2>वचनं श्रवणम् (Audio Learning)</h2>
        <p className="shloka-meaning">"सुनना श्रवण है" - "Listening is hearing"</p>
        
        <div className="audio-recorder">
          <h3>Record Audio for Learning</h3>
          
          <div className="recording-controls">
            {!isRecording ? (
              <button className="record-button" onClick={startRecording}>
                Start Recording
              </button>
            ) : (
              <button className="stop-button" onClick={stopRecording}>
                Stop Recording
              </button>
            )}
          </div>
          
          <div className="audio-list">
            {audioRecordings.map((audioUrl, index) => (
              <div key={index} className="audio-item">
                <audio controls src={audioUrl}></audio>
                <span>Recording {index + 1}</span>
              </div>
            ))}
          </div>
          
          <textarea
            placeholder="Share your reflections on what you hear..."
            value={audioReflection}
            onChange={handleReflectionChange}
            rows={5}
          />
          
          <button 
            className="save-button"
            onClick={saveAudioMemory}
            disabled={audioRecordings.length === 0}
          >
            Save Audio Experience
          </button>
        </div>
      </div>
    </section>
  );
}

// At the bottom of AudioLearningSection.jsx, add:
export default AudioLearningSection;