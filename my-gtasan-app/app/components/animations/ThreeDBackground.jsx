'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeDBackground({ children, className = '' }) {
 const containerRef = useRef(null);
 const sceneRef = useRef(null);
 const rendererRef = useRef(null);
 const animationIdRef = useRef(null);

 useEffect(() => {
 if (!containerRef.current) return;

 // Skip 3D on mobile for performance
 const isMobile = window.innerWidth < 768;
 if (isMobile) return;

 // Setup Three.js scene with reduced quality
 const scene = new THREE.Scene();
 sceneRef.current = scene;

 const camera = new THREE.PerspectiveCamera(
 75,
 containerRef.current.clientWidth / containerRef.current.clientHeight,
 0.1,
 1000
 );
 camera.position.z = 5;

 // Reduce antialias on lower-end devices
 const renderer = new THREE.WebGLRenderer({
 alpha: true,
 antialias: false, // Disable for performance
 powerPreference: 'low-power',
 precision: 'lowp' // Lower precision for better performance
 });
 renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
 renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio
 renderer.setClearColor(0x000000, 0.1);
 containerRef.current.appendChild(renderer.domElement);
 rendererRef.current = renderer;

 // Reduced geometry complexity
 const geometry = new THREE.IcosahedronGeometry(2, 2); // Reduced from 4 to 2
 const material = new THREE.MeshPhongMaterial({
 color: 0x00ff87,
 emissive: 0x00a2ff,
 wireframe: true,
 opacity: 0.3,
 transparent: true,
 });
 const cube = new THREE.Mesh(geometry, material);
 scene.add(cube);

 // Add lights (single point light instead of multiple)
 const light = new THREE.PointLight(0x00ff87, 0.8); // Reduced intensity
 light.position.set(5, 5, 5);
 scene.add(light);

 const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Reduced intensity
 scene.add(ambientLight);

 // Slower animation (reduced rotation speed)
 let frameCount = 0;
 const animate = () => {
 animationIdRef.current = requestAnimationFrame(animate);
 frameCount++;

 // Only update every other frame to reduce CPU load
 if (frameCount % 2 === 0) {
 cube.rotation.x += 0.001;
 cube.rotation.y += 0.0015;
 renderer.render(scene, camera);
 }
 };
 animate();

 // Handle resize
 const handleResize = () => {
 if (!containerRef.current) return;
 const width = containerRef.current.clientWidth;
 const height = containerRef.current.clientHeight;
 camera.aspect = width / height;
 camera.updateProjectionMatrix();
 renderer.setSize(width, height);
 };

 window.addEventListener('resize', handleResize);

 return () => {
 window.removeEventListener('resize', handleResize);
 if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
 if (containerRef.current && rendererRef.current?.domElement) {
 try {
 containerRef.current.removeChild(rendererRef.current.domElement);
 } catch (e) {
 // Element already removed
 }
 }
 rendererRef.current?.dispose();
 };
 }, []);

 return (
 <div className={`relative w-full h-full ${className}`}>
 <div ref={containerRef} className="absolute inset-0" />
 <div className="relative z-10">{children}</div>
 </div>
 );
}
