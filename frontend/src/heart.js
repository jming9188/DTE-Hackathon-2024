import * as THREE from 'three';
import React from 'react';

const Heart = () => {
    // Scene
    const scene = new THREE.Scene();
    // Canvas
    const canvas = document.querySelector("canvas.webgl");
    // Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 5;
    scene.add(camera);

    //Used the following code: https://threejs.org/docs/#api/en/geometries/ShapeGeometry 
    function createHeartShape() {
        const shape = new THREE.Shape();
        const x = 0, y = 0;
    
        shape.moveTo(x + 5, y + 5);
        shape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y);
        shape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7);
        shape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19);
        shape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7);
        shape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y);
        shape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5);
    
        return shape;
    }
    
    const heartShape = createHeartShape();
    const geometry = new THREE.ShapeGeometry(heartShape);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 }); 
    const heartMesh = new THREE.Mesh(geometry, material);
    
    scene.add(heartMesh);
    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    function animate() {
        requestAnimationFrame(animate)
    
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    
        renderer.render(scene, camera);
    }
    
    animate();

    return (
        <canvas className="webgl"></canvas>
    );
}
export default Heart;