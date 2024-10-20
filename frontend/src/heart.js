import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import React, { useEffect } from 'react';

const Heart = () => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Canvas
    const canvas = document.querySelector('canvas.webgl');

    // Sizes
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Camera
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 35;
    camera.position.y = -5;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Load GLTF 3D Model using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      'https://sketchfab.com/models/6f815b9822dc479eae0a17b8dcab9c75/file.gltf', // Replace with actual GLTF URL
      (gltf) => {
        const heartModel = gltf.scene;
        heartModel.scale.set(5, 5, 5); // Scale the model if needed
        scene.add(heartModel);

        // Animate the model
        const animate = () => {
          requestAnimationFrame(animate);
          heartModel.rotation.y += 0.01; // Add rotation for animation
          renderer.render(scene, camera);
        };

        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred while loading the model:', error);
      }
    );

    // Resize Handler
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('resize', null);
    };
  }, []);

  return <canvas className="webgl"></canvas>;
};

export default Heart;
