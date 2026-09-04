import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Torus } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

function SceneObjects({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!reducedMotion && meshRef.current) meshRef.current.rotation.y += delta * 0.12;
  });

  return (
    <>
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={2} color="#9ff7e9" />
      <Float speed={1.1} rotationIntensity={0.18} floatIntensity={0.35}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.65, 1]} />
          <meshStandardMaterial color="#173b45" roughness={0.28} metalness={0.7} wireframe />
        </mesh>
        <Torus args={[2.02, 0.012, 12, 96]} rotation={[Math.PI / 2.5, 0.2, 0]}>
          <meshBasicMaterial color="#2dd4bf" transparent opacity={0.72} />
        </Torus>
      </Float>
    </>
  );
}

export default function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas fallback={<div />} camera={{ position: [0, 0, 5.5], fov: 38 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <SceneObjects reducedMotion={reducedMotion} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={!reducedMotion} autoRotateSpeed={0.25} />
      </Canvas>
    </div>
  );
}