/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import useMobileDetection from "../../hooks/useMobileDetection";
import EarthMobile from "./EarthMobile";
import { Suspense } from "react";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-white text-xl">{progress.toFixed(0)}% loaded</div>
    </div>
  );
};

const Earth = () => {
  const { scene } = useGLTF("./earth/scene.gltf");
  return <primitive object={scene} scale={9.0} position={[0, 0, 0]} />;
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
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
