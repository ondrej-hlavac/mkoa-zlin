import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

interface ModelProps {
  rotationX: number;
  rotationY: number;
  modelMtlUrl: string;
  modelObjUrl: string;
}

export const ProjectionModel = ({
  rotationX,
  rotationY,
  modelMtlUrl,
  modelObjUrl,
}: ModelProps) => {
  const mtl = useLoader(MTLLoader, modelMtlUrl);
  const obj = useLoader(OBJLoader, modelObjUrl, (loader) => {
    mtl.preload();
    loader.setMaterials(mtl);
  });

  return (
    <mesh>
      <primitive
        object={obj}
        rotation-y={rotationX}
        rotation-x={rotationY}
        position={[0, 0, 0]}
        material={mtl}
      />
    </mesh>
  );
};
