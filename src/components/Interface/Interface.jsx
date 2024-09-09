/* eslint-disable react/prop-types */
import ImageViewer from "../ImageViewer/ImageViewer";
import "./Interface.scss";

// eslint-disable-next-line react/prop-types
function Interface({ response }) {
  const { asr, clip, image, object, ocr } = response;

  const handleAsrLogic = (data) => {
    // Logic xử lý cho asr
    return <div>ASR Logic</div>;
  };

  const handleClipLogic = (data) => {
    // Logic xử lý cho clip
    return data.map((item, i) => (
      <div key={i}>
        <ImageViewer src={item.image_path} width="300px" height="160px" />
        <div>
          <div>Frame: {item.frame_id}</div>
          <div>Folder: {item.video_folder}</div>
          <div>Video: {item.video_id}</div>
        </div>
      </div>
    ));
  };

  const handleImageLogic = (data) => {
    // Logic xử lý cho image
    return <div>Image Logic</div>;
  };

  const handleObjectLogic = (data) => {
    console.log(data);
    // Logic xử lý cho object
    return data.map((item, i) => (
      <div key={i}>
        <ImageViewer
          src={item._source.image_path}
          width="300px"
          height="160px"
        />
        <div>
          <div>Frame: {item._source.frame_id}</div>
          <div>Folder: {item._source.video_folder}</div>
          <div>Video: {item._source.video_id}</div>
        </div>
      </div>
    ));
  };

  const handleOcrLogic = (data) => {
    // Logic xử lý cho ocr
    return data.map((item, i) => (
      <div className="info" key={i}>
        <ImageViewer
          src={item._source.image_path}
          width="300px"
          height="160px"
        />
        <div>
          <div>Frame: {item._source.frame}</div>
          <div>Video_ID: {item._source.video_name}</div>
          <div>
            Text: {item._source.text.map((character) => `${character} `)}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="interface">Result</div>
      <div className="result">
        {asr.length > 0 && handleAsrLogic(asr)}
        {clip.length > 0 && handleClipLogic(clip)}
        {image.length > 0 && handleImageLogic(image)}
        {object.length > 0 && handleObjectLogic(object)}
        {ocr.length > 0 && handleOcrLogic(ocr)}
      </div>
    </>
  );
}

export default Interface;
