
"use client";

import { useEffect, useRef } from "react";
import { Group } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
  Stars,
} from "@react-three/drei";

function OrbitRings() {
  const ringRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!ringRef.current) return;

    ringRef.current.rotation.z += delta * 0.08;
    ringRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.3) * 0.12;
  });

  return (
    <group ref={ringRef}>
      <mesh rotation={[1.1, 0.3, 0]}>
        <torusGeometry args={[1.85, 0.008, 16, 120]} />
        <meshBasicMaterial
          color="#477aff"
          transparent
          opacity={0.5}
        />
      </mesh>

      <mesh rotation={[0.7, 0.8, 0.5]}>
        <torusGeometry args={[2.05, 0.006, 16, 120]} />
        <meshBasicMaterial
          color="#a855f7"
          transparent
          opacity={0.35}
        />
      </mesh>

      <mesh rotation={[1.5, 0.2, 0.9]}>
        <torusGeometry args={[2.2, 0.004, 16, 120]} />
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

function AISphere() {
  const sphereRef = useRef<Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: PointerEvent) => {
      mouseRef.current.x =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouseRef.current.y =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!sphereRef.current) return;

    const targetY =
      state.clock.elapsedTime * 0.18 +
      mouseRef.current.x * 0.4;

    const targetX =
      Math.sin(state.clock.elapsedTime * 0.2) * 0.12 +
      mouseRef.current.y * 0.25;

    const smoothness = 1 - Math.exp(-5 * delta);

    sphereRef.current.rotation.y +=
      (targetY - sphereRef.current.rotation.y) * smoothness;

    sphereRef.current.rotation.x +=
      (targetX - sphereRef.current.rotation.x) * smoothness;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.45}>
      <group
        ref={sphereRef}
        position={[3.8, -0.2, 0]}
        scale={0.72}
      >
        {/* Outer glow */}
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1.25, 3]} />
          <meshBasicMaterial
            color="#4169ff"
            transparent
            opacity={0.045}
          />
        </mesh>

        {/* Main AI sphere */}
        <mesh>
          <icosahedronGeometry args={[1.25, 5]} />
          <MeshDistortMaterial
            color="#4169ff"
            emissive="#182bff"
            emissiveIntensity={1.5}
            roughness={0.12}
            metalness={0.85}
            distort={0.38}
            speed={2}
          />
        </mesh>

        {/* Wireframe layer */}
        <mesh scale={1.12}>
          <icosahedronGeometry args={[1.25, 2]} />
          <meshBasicMaterial
            color="#70dfff"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>

        {/* Orbital rings */}
        <OrbitRings />

        {/* Small floating sparkles around sphere */}
        <Sparkles
          count={45}
          scale={4}
          size={2}
          speed={0.5}
          color="#67e8f9"
        />
      </group>
    </Float>
  );
}

export default function Universe() {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />

        {/* Cinematic lighting */}
        <pointLight
          position={[4, 3, 4]}
          intensity={30}
          color="#4263ff"
        />

        <pointLight
          position={[-4, -2, 2]}
          intensity={20}
          color="#a855f7"
        />

        <pointLight
          position={[0, 4, -3]}
          intensity={12}
          color="#67e8f9"
        />

        {/* Deep space stars */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0.3}
          fade
          speed={0.8}
        />

        {/* Floating particles */}
        <Sparkles
          count={160}
          scale={10}
          size={2}
          speed={0.35}
          color="#8bafff"
        />

        <Sparkles
          count={70}
          scale={8}
          size={3}
          speed={0.2}
          color="#c084fc"
        />

        <AISphere />
      </Canvas>
    </div>
  );
}
