/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import useMobileDetection from "../../hooks/useMobileDetection";
import EarthMobile from "./EarthMobile";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");
  return <primitive object={earth.scene} scale={9.0} position-y={0} />;
};

const EarthCanvas = () => {
  const { isMobile, isReducedMotion } = useMobileDetection();

  // Use lightweight static Earth for mobile or reduced motion
  if (isMobile || isReducedMotion) {
    return <EarthMobile />;
  }

  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.5,
        far: 120,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight intensity={1.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Earth />
    </Canvas>
  );
};
export default EarthCanvas;
