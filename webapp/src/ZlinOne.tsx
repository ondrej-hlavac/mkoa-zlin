import { useCallback, useState } from "react";
import { MyCanvas } from "./components/MyCanvas";

const FindingData = [
  {
    objUrl: "zlin/Dieta_Lowpoly/Dieta_lowpoly.obj",
    mtlUrl: "zlin/Dieta_Lowpoly/Dieta_lowpoly.mtl",
  },
  {
    objUrl: "zlin/Muscle_Fitness_Lowpoly/Muscle_Fitness_Lowpoly.obj",
    mtlUrl: "zlin/Muscle_Fitness_Lowpoly/Muscle_Fitness_Lowpoly.mtl",
  },
  {
    objUrl:
      "zlin/Odeprit_smysl_zivota_Lowpoly/Odeprit_smysl_zivota_Lowpoly.obj",
    mtlUrl:
      "zlin/Odeprit_smysl_zivota_Lowpoly/Odeprit_smysl_zivota_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Skolni_rad_Lowpoly/Skolni_rad_Lowpoly.obj",
    mtlUrl: "zlin/Skolni_rad_Lowpoly/Skolni_rad_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Weed_cosi_Lowpoly/Weed_cosi_Lowpoly.obj",
    mtlUrl: "zlin/Weed_cosi_Lowpoly/Weed_cosi_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Absolute_Vodka_Lowpoly/Absolute_Vodka_Lowpoly.obj",
    mtlUrl: "zlin/Absolute_Vodka_Lowpoly/Absolute_Vodka_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Amarena_Lowpoly/Amarena_Lowpoly.obj",
    mtlUrl: "zlin/Amarena_Lowpoly/Amarena_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Carabeo_Lowpoly/Carabeo_Lowpoly.obj",
    mtlUrl: "zlin/Carabeo_Lowpoly/Carabeo_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Casovac_Lowpoly/Casovac_Lowpoly.obj",
    mtlUrl: "zlin/Casovac_Lowpoly/Casovac_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Coca_Cola_Lowpoly/Coca_Cola_Lowpoly.obj",
    mtlUrl: "zlin/Coca_Cola_Lowpoly/Coca_Cola_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Cool_Hemp_Lowpoly/Cool_Hemp_Lowpoly.obj",
    mtlUrl: "zlin/Cool_Hemp_Lowpoly/Cool_Hemp_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Dr_Pepper_Lowpoly/Dr_Pepper_Lowpoly.obj",
    mtlUrl: "zlin/Dr_Pepper_Lowpoly/Dr_Pepper_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Fanta_Lowpoly/Snek_Lowpoly.obj",
    mtlUrl: "zlin/Fanta_Lowpoly/Snek_Lowpoly.mtl",
  },
  {
    objUrl: "zlin/Lucky_Bands_Lowpoly/Lucky_Bands_Lowpoly.obj",
    mtlUrl: "zlin/Lucky_Bands_Lowpoly/Lucky_Bands_Lowpoly.mtl",
  },
  // {
  //   objUrl: "zlin/Flashky_Krabicka_Lowpoly/Flashky_Krabicka_Lowpoly.obj",
  //   mtlUrl: "zlin/Flashky_Krabicka_Lowpoly/Flashky_Krabicka_Lowpoly.mtl",
  // },
  // {
  //   objUrl: "zlin/IceT_Peach_Lowpoly/IceT_Peach_Lowpoly.obj",
  //   mtlUrl: "zlin/IceT_Peach_Lowpoly/IceT_Peach_Lowpoly.mtl",
  // },
  // {
  //   objUrl: "zlin/Jack_Daniels_Lowpoly/Jack_Daniels_Lowpoly.obj",
  //   mtlUrl: "zlin/Jack_Daniels_Lowpoly/Jack_Daniels_Lowpoly.mtl",
  // },
  // {
  //   objUrl: "zlin/Kate_Bush_Lowpoly/Kate_Bush_Lowpoly.obj",
  //   mtlUrl: "zlin/Kate_Bush_Lowpoly/Kate_Bush_Lowpoly.mtl",
  // },

  // {
  //   objUrl: "zlin/Kiwi_lahev_Lowpoly/Kiwi_lahev_Lowpoly.obj",
  //   mtlUrl: "zlin/Kiwi_lahev_Lowpoly/Kiwi_lahev_Lowpoly.mtl",
  // },
  {
    objUrl: "zlin/Kost_Lowpoly/Kost_Lowpoly.obj",
    mtlUrl: "zlin/Kost_Lowpoly/Kost_Lowpoly.mtl",
  },
  // {
  //   objUrl: "zlin/Kosti_Lowpoly/Kosti_Lowpoly.obj",
  //   mtlUrl: "zlin/Kosti_Lowpoly/Kosti_Lowpoly.mtl",
  // },
  {
    objUrl: "zlin/Kosti_Lowpoly/Kosti_Lowpoly.obj",
    mtlUrl: "zlin/Kosti_Lowpoly/Kosti_Lowpoly.mtl",
  },
];

const ZlinOne = () => {
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
      {FindingData.map((finding) => {
        return (
          <MyCanvas
            key={finding.mtlUrl}
            width={canvasSize}
            height={canvasSize}
            position={randomStartPosition()}
            frameDimensions={frameDimensions}
            mtlUrl={finding.mtlUrl}
            objUrl={finding.objUrl}
          />
        );
      })}
    </div>
  );
};

export default ZlinOne;
