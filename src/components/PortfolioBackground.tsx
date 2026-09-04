import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Group } from "three";

const NODE_POSITIONS: [number, number, number][] = [
  [-4.4, 2.5, -1],
  [-2.1, 3.1, -0.4],
  [0.4, 2.45, -0.9],
  [3.3, 2.9, -0.3],
  [4.5, 0.7, -1.1],
  [2.4, -0.6, -0.5],
  [-0.5, -1.2, -1],
  [-3.2, -0.5, -0.6],
  [-4.7, -2.1, -1.2],
  [0.8, -3, -0.9],
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [5, 6], [6, 7], [7, 8], [6, 9], [1, 6], [2, 5],
];

function NetworkField({ reducedMotion, isLight }: { reducedMotion: boolean; isLight: boolean }) {
  const groupRef = useRef<Group>(null);
  const pulseRef = useRef<Group>(null);
  const linePositions = useMemo(
    () => CONNECTIONS.flatMap(([from, to]) => [NODE_POSITIONS[from], NODE_POSITIONS[to]]),
    []
  );
  const nodeColor = isLight ? "#0f766e" : "#5eead4";
  const lineColor = isLight ? "#94b8b7" : "#31515d";
  const securityColor = isLight ? "#4f46a5" : "#8b9cff";

  useFrame((_, delta) => {
    if (!reducedMotion && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.006;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.00012) * 0.025;
    }
    if (!reducedMotion && pulseRef.current) pulseRef.current.rotation.z -= delta * 0.08;
  });

  return (
    <group ref={groupRef} position={[0, 0, -2]} scale={isLight ? 0.95 : 1}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array(linePositions.flat()), 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={lineColor} transparent opacity={isLight ? 0.22 : 0.38} />
      </lineSegments>
      {NODE_POSITIONS.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[index % 3 === 0 ? 0.045 : 0.026, 8, 8]} />
          <meshBasicMaterial color={nodeColor} transparent opacity={isLight ? 0.38 : 0.62} />
        </mesh>
      ))}
      <group position={[-0.1, 0.35, 0.25]} rotation={[0.15, -0.18, 0.35]}>
        <mesh>
          <octahedronGeometry args={[0.72, 0]} />
          <meshBasicMaterial color={securityColor} transparent opacity={isLight ? 0.12 : 0.2} wireframe />
        </mesh>
        <group ref={pulseRef}>
          {[[-0.46, 0.15, 0], [0.48, -0.16, 0.08], [0, 0.5, -0.08]].map((position, index) => (
            <mesh key={index} position={position as [number, number, number]}>
              <sphereGeometry args={[0.045, 8, 8]} />
              <meshBasicMaterial color={securityColor} transparent opacity={isLight ? 0.42 : 0.7} />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
}

export default function PortfolioBackground() {
  const [isLight, setIsLight] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const updatePreferences = () => {
      setIsLight(document.documentElement.classList.contains("light"));
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };
    const observer = new MutationObserver(updatePreferences);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    updatePreferences();
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-background" aria-hidden="true">
      <Canvas fallback={<div />} orthographic camera={{ position: [0, 0, 10], zoom: 85 }} dpr={[1, 1.15]} gl={{ alpha: true, antialias: false }}>
        <NetworkField reducedMotion={reducedMotion} isLight={isLight} />
      </Canvas>
    </div>
  );
}