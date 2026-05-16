import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function Shapes() {
  const meshRef = useRef()
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1
    }
  })

  const shapes = useMemo(() => [
    { position: [-2.5, 1, -3], scale: 0.6, color: '#06b6d4', type: 'box' },
    { position: [2.5, -1.5, -4], scale: 0.8, color: '#8b5cf6', type: 'sphere' },
    { position: [-1.5, -1, -5], scale: 0.5, color: '#f59e0b', type: 'octahedron' },
    { position: [3, 2, -6], scale: 0.7, color: '#ec4899', type: 'torus' },
    { position: [-3.5, -2.5, -7], scale: 0.9, color: '#14b8a6', type: 'icosahedron' },
  ], [])

  return (
    <group ref={groupRef}>
      {shapes.map((shape, i) => (
        <Float key={i} speed={1.5} rotationIntensity={0.4} floatIntensity={0.5}>
          <mesh ref={meshRef} position={shape.position} scale={shape.scale}>
            {shape.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
            {shape.type === 'octahedron' && <octahedronGeometry args={[1]} />}
            {shape.type === 'torus' && <torusGeometry args={[1, 0.4, 16, 32]} />}
            {shape.type === 'icosahedron' && <icosahedronGeometry args={[1]} />}
            <MeshDistortMaterial
              color={shape.color}
              roughness={0.3}
              metalness={0.8}
              distort={0.2}
              speed={1.5}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
        <Shapes />
      </Canvas>
    </div>
  )
}
