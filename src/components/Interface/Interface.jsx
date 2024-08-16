import image1 from "../../assets/images/IMG_0301.png";
import image2 from "../../assets/images/IMG_0201.png";
import image3 from "../../assets/images/IMG_0268.png";
import image4 from "../../assets/images/IMG_1336.png";
import image5 from "../../assets/images/IMG_0692.png";
import image6 from "../../assets/images/IMG_0254.png";
import image7 from "../../assets/images/IMG_0267.png";
import image8 from "../../assets/images/IMG_0518.png";
import image9 from "../../assets/images/IMG_0688.png";
import image10 from "../../assets/images/IMG_1316.png";

import "./Interface.scss";
import ImageViewer from "../ImageViewer/ImageViewer";

function Interface() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <>
      <div className="interface">Result</div>
      <div className="result">
        {images.map((item, index) => (
          <ImageViewer
            key={index}
            src={item}
            width="280px"
            height="150px"
            alt="Placeholder Image"
            className="custom-class"
          />
        ))}
      </div>
    </>
  );
}

export default Interface;
