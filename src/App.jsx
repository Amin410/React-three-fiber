import { OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.05;
      meshRef.current.rotation.y += 0.05;
      meshRef.current.rotation.z += 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles
        count={100}
        scale={1}
        speed={0.002}
        noise={0.2}
        color="yellow"
        size={6}
      />
    </mesh>
  );
};
const Base = () => {
  const meshRef2 = useRef();
  useFrame(() => {
    if (meshRef2.current) {
      meshRef2.current.rotation.x += 0.05;
      meshRef2.current.rotation.y += 0.05;
      meshRef2.current.rotation.z += 0.05;
    }
  });
  return (
    <mesh ref={meshRef2} position={-1}>
      <boxGeometry args={[2, 0.1, 1]} />
      <meshPhongMaterial color="#479547" />
    </mesh>
  );
};
const App = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9cdba6} />
      <color attach="background" args={["F0F0F0"]} />
      <RotatingCube />
      <Base />
    </Canvas>
  );
};
export default App;
