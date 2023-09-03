import { FC, useCallback, useState } from "react";
import { MyCanvas } from "./components/MyCanvas";

const ZlinOne: FC<{
  projectorData: Array<{ objUrl: string; mtlUrl: string }>;
}> = ({ projectorData }) => {
  console.log("zlin onea");
  // const frameRef = createRef<HTMLDivElement>();
  const [frameDimensions, setFrameDimensions] = useState<DOMRect>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const frameRef = useCallback((domNode: any) => {
    if (domNode) {
      setFrameDimensions(domNode.getBoundingClientRect());
    }
  }, []);

  const canvasSize = 600;

  const randomStartPosition = () => {
    if (frameDimensions) {
      const maxLeft = frameDimensions.width - canvasSize;
      const maxTop = frameDimensions.height - canvasSize;

      const randomLeft = Math.floor(Math.random() * maxLeft);
      const randomTop = Math.floor(Math.random() * maxTop);

      return { x: randomLeft, y: randomTop };
    }

    return { x: 100, y: 100 };
  };

  return (
    <div
      ref={frameRef}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      {projectorData.map((primitive) => {
        return (
          <MyCanvas
            key={primitive.mtlUrl}
            width={canvasSize}
            height={canvasSize}
            position={randomStartPosition()}
            frameDimensions={frameDimensions}
            mtlUrl={primitive.mtlUrl}
            objUrl={primitive.objUrl}
          />
        );
      })}
    </div>
  );
};

export default ZlinOne;
