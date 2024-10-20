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

<<<<<<< HEAD
      
      
    </div>
  );
=======
    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 35;
    camera.position.y = -5;
    scene.add(camera);

    //Utilized code from https://threejs.org/docs/#api/en/geometries/ShapeGeometry 
    // Create Heart Shape
    const x = 0, y = 0;
    const shape = new THREE.Shape();
    shape.moveTo( x + 5, y + 5 );
    shape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
    shape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
    shape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
    shape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
    shape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
    shape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
    const geometry = new THREE.ExtrudeGeometry(shape);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const heartMesh = new THREE.Mesh(geometry, material);
    heartMesh.scale.y = -1;
    scene.add(heartMesh);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);

    // Animate the heart
    const animate = () => {
      requestAnimationFrame(animate);
      heartMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('resize', null);
    };
  }, []);

  return <canvas className="webgl"></canvas>;
>>>>>>> 449fcfacfaca02ee6d024949fad93c999f53caf0
};

export default HeartEmbed;
