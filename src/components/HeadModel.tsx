import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Box3, Vector3, Mesh, Group } from 'three'

function HeadModel() {
  const gltf = useGLTF('/models/head.glb')
  const ref = useRef<Group>(null)

  useEffect(() => {
    const box = new Box3().setFromObject(gltf.scene)
    const center = new Vector3()
    box.getCenter(center)
    gltf.scene.position.sub(center)

    gltf.scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((mat) => {
            mat.wireframe = true
            mat.color.set(0xffffff)
          })
        } else {
          mesh.material.wireframe = true
          mesh.material.color.set(0xffffff)
        }
      }
    })
  }, [gltf])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
      ref.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2
    }
  })

  return <primitive ref={ref} object={gltf.scene} scale={1.5} />
}

export default function HeadScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <HeadModel />
      <OrbitControls enableRotate={true} enableZoom={true} enablePan={false} />
    </Canvas>
  )
}
