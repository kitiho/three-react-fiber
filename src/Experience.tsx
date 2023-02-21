import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef, useState } from "react"
import { Mesh, Vector3 } from "three"
import { Stats, OrbitControls } from '@react-three/drei'
import CustomObject from "./CustomObject"

const App = () => {
  const cubeRef = useRef<Mesh>(null!)
  const { gl, camera } = useThree()
  useFrame((state, delta) => {
    // setRotateNum((val) => val + 0.01)
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 2
    }
    // state.camera.position.x = Math.sin(state.clock.elapsedTime) * 10
    // state.camera.position.z = Math.cos(state.clock.elapsedTime) * 10
    // state.camera.lookAt(0, 0, 0)
  })
  return (
    <>
      <Stats />
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group>
        <mesh ref={cubeRef} position-x={-2} >
          <boxGeometry />
          <meshStandardMaterial color="cyan" />
        </mesh>
        <mesh position-x={2} >
          <sphereGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"greenyellow"} />
      </mesh>
      <CustomObject />
    </>
  )
}

export default App
