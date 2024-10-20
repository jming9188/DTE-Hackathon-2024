import React from 'react';

const HeartEmbed = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: 'white' }}>
      {/* Sketchfab iframe */}
      <iframe
        title="PUMPING HEART MODEL"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/6f815b9822dc479eae0a17b8dcab9c75/embed?autostart=1&ui_controls=0&ui_infos=0&ui_stop=0"
        style={{ width: '100%', height: '100%' }} 
      >
      </iframe>

      
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'transparent',
          pointerEvents: 'auto', 
          zIndex: 1, 
        }}
      ></div>

      
      
    </div>
  );
};

export default HeartEmbed;
