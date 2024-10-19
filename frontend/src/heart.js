import * as THREE from 'three';
import React, { useEffect } from 'react';
const Heart = () => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Canvas
    const canvas = document.querySelector("canvas.webgl");

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 35;
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
    scene.add(heartMesh);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);

    // Animate the heart
    const animate = () => {
      requestAnimationFrame(animate);
      heartMesh.rotation.x += 0.01;
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
};

export default Heart;
