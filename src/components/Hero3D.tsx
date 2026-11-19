"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setIsSupported(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf7f9f8, 0.02);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 17;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf7f9f8, 0);
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Precision Rolling Polyhedron (Origami Facets)
    const icosaGeometry = new THREE.IcosahedronGeometry(3.8, 1);
    const icosaMaterial = new THREE.MeshStandardMaterial({
      color: 0x43d6b0,
      roughness: 0.3,
      metalness: 0.75,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, icosaMaterial);
    mainGroup.add(icosaMesh);

    // Wireframe overlay in crisp teal/silver
    const wireframeGeometry = new THREE.IcosahedronGeometry(3.83, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x087e79,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    mainGroup.add(wireframeMesh);

    // 2. Multi-Axis Rolling Orbit Rings
    const ringMaterials = [
      new THREE.MeshBasicMaterial({
        color: 0x43d6b0,
        transparent: true,
        opacity: 0.65,
        wireframe: true,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x087e79,
        transparent: true,
        opacity: 0.5,
        wireframe: true,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x8a999c,
        transparent: true,
        opacity: 0.5,
        wireframe: true,
      }),
    ];

    const ring1 = new THREE.Mesh(
      new THREE.TorusGeometry(5.8, 0.045, 8, 80),
      ringMaterials[0]
    );
    mainGroup.add(ring1);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(7.2, 0.04, 8, 90),
      ringMaterials[1]
    );
    mainGroup.add(ring2);

    const ring3 = new THREE.Mesh(
      new THREE.TorusGeometry(8.5, 0.035, 8, 100),
      ringMaterials[2]
    );
    mainGroup.add(ring3);

    // 3. Rolling Constellation Particles
    const particleCount = 240;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorMint = new THREE.Color(0x43d6b0);
    const colorTeal = new THREE.Color(0x087e79);
    const colorSilver = new THREE.Color(0x9aa8ab);

    for (let i = 0; i < particleCount; i++) {
      const radius = 5.2 + Math.random() * 11;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor =
        i % 3 === 0 ? colorMint : i % 3 === 1 ? colorTeal : colorSilver;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.18,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const mintLight = new THREE.PointLight(0x43d6b0, 3.5, 30);
    mintLight.position.set(8, 6, 8);
    scene.add(mintLight);

    const tealLight = new THREE.PointLight(0x087e79, 3.2, 30);
    tealLight.position.set(-8, -6, 5);
    scene.add(tealLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight.position.set(0, 10, 8);
    scene.add(dirLight);

    // Scroll & Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetX = x * 1.5;
      targetY = y * 1.5;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const speedMultiplier = prefersReducedMotion ? 0.2 : 1;

      // Smooth scroll interpolation for rolling physics
      scrollY += (targetScrollY - scrollY) * 0.08;
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      // Scroll-driven ROLLING motion
      const rollFactor = scrollY * 0.005;
      const rollTilt = scrollY * 0.003;

      mainGroup.rotation.x = rollFactor + mouseY * 0.4;
      mainGroup.rotation.y += 0.12 * delta * speedMultiplier + mouseX * 0.4;
      mainGroup.rotation.z = rollTilt;

      // Individual mesh rolling & tumbling on scroll
      icosaMesh.rotation.x = scrollY * 0.008;
      icosaMesh.rotation.y += 0.25 * delta * speedMultiplier;
      wireframeMesh.rotation.x = scrollY * 0.008;
      wireframeMesh.rotation.y += 0.25 * delta * speedMultiplier;

      // Concentric rings roll on different axes
      ring1.rotation.x = Math.PI / 3 + scrollY * 0.006;
      ring1.rotation.y = Math.PI / 6 + scrollY * 0.004;
      ring1.rotation.z += 0.2 * delta * speedMultiplier;

      ring2.rotation.x = -Math.PI / 4 - scrollY * 0.005;
      ring2.rotation.y = Math.PI / 4 + scrollY * 0.006;
      ring2.rotation.z -= 0.18 * delta * speedMultiplier;

      ring3.rotation.x = Math.PI / 2.2 + scrollY * 0.007;
      ring3.rotation.y = scrollY * 0.003;

      // Parallax translation on scroll (descends subtly as you scroll)
      mainGroup.position.y = -scrollY * 0.006;
      particles.rotation.y -= 0.06 * delta * speedMultiplier + scrollY * 0.001;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      icosaGeometry.dispose();
      icosaMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      ringMaterials.forEach((m) => m.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!isSupported) {
    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-[#087E79]/15 to-[#43D6B0]/20 blur-3xl" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-auto cursor-grab active:cursor-grabbing opacity-85"
      aria-hidden="true"
    />
  );
}
