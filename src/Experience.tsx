import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef, useState } from "react"
import { Mesh, Vector3 } from "three"
import { Stats, OrbitControls, TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial } from '@react-three/drei'
import CustomObject from "./CustomObject"
import * as THREE from 'three'

const App = () => {
  const cubeRef = useRef<Mesh>(null!)
  const sphereRef = useRef<Mesh>(null!)
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
      <OrbitControls
        enableDamping={true}
        makeDefault
      />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />
      <ambientLight intensity={0.5} />
      <group>
        <mesh ref={cubeRef} position-x={-2} >
          <boxGeometry />
          <meshStandardMaterial color="cyan" />
        </mesh>
        <TransformControls
          object={cubeRef}
          mode="translate"
        />
        <PivotControls
          anchor={[0, -1, 0]}
          depthTest={false}
          lineWidth={4}
          axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
          scale={100}
          fixed
        >
          <mesh position-x={2} ref={sphereRef}>
            <sphereGeometry />
            <meshStandardMaterial color="mediumpurple" />
            <Html
              position={[1, 1, 0]}
              wrapperClass="label"
              center
              distanceFactor={5}
              occlude={[sphereRef, cubeRef]}
            >
              That's a sphere 👍
            </Html>
          </mesh>
        </PivotControls>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color={"greenyellow"} /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.75}
          color="greenyellow"
        />
      </mesh>
      <Float
        speed={5}
        floatIntensity={10}
      >
        <Text
          font="ShantellSans-Regular.ttf"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          I LOVE R3F
          <meshNormalMaterial side={THREE.DoubleSide} />
        </Text>
      </Float>
      {/* <CustomObject /> */}
    </>
  )
}

export default App
