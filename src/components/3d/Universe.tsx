
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
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
            <group
                ref={sphereRef}
                position={[4.1, -0.3, 0]}
                scale={0.7}
            >
                <mesh>
                    <icosahedronGeometry args={[1.25, 4]} />
                    <MeshDistortMaterial
                        color="#4169ff"
                        emissive="#182bff"
                        emissiveIntensity={1.5}
                        roughness={0.15}
                        metalness={0.8}
                        distort={0.35}
                        speed={2}
                    />
                </mesh>

                <mesh scale={1.12}>
                    <icosahedronGeometry args={[1.25, 2]} />
                    <meshBasicMaterial
                        color="#70dfff"
                        wireframe
                        transparent
                        opacity={0.18}
                    />
                </mesh>
            </group>
        </Float>
    );
}


export default function Universe() {
    return (
        <div className="absolute inset-0 -z-0">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.6} />
                <pointLight position={[4, 3, 4]} intensity={30} color="#4263ff" />
                <pointLight position={[-4, -2, 2]} intensity={20} color="#a855f7" />

                <Stars
                    radius={100}
                    depth={50}
                    count={2500}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />

                <Sparkles
                    count={100}
                    scale={8}
                    size={2}
                    speed={0.4}
                    color="#8bafff"
                />

                <AISphere />
            </Canvas>
        </div>
    );
}
