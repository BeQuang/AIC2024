/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import ImageViewer from "../ImageViewer/ImageViewer";
import "./Interface.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { postSimilarImage } from "../../services/postService";

// eslint-disable-next-line react/prop-types
function Interface({ response, isSimilarImage, setIsSimilarImage }) {
  const { asr, clip, image, object, ocr } = response || {};
  const [videoCurrent, setVideoCurrent] = useState("");
  const [show, setShow] = useState(false);
  const [timeImageCurrent, setTimeImageCurrent] = useState(0);
  const [similarImage, setSimilarImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isSimilarImage) {
      setSimilarImage(null);
    }
  }, [isSimilarImage]);

  const handleShowVideo = (video_id, frame_id, fps) => {
    setVideoCurrent(video_id);
    setShow(true);
    setTimeImageCurrent(frame_id / fps);
  };

  const handleShowSimilarImage = async (image_path) => {
    setLoading(true);
    setIsSimilarImage(true);
    try {
      const response = await postSimilarImage(image_path);
      setSimilarImage(response);
    } catch (error) {
      console.error("Failed to fetch similar images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAsrLogic = (data) => {
    // Logic xử lý cho asr
    return <div>ASR Logic</div>;
  };

  const handleClipLogic = (data) => {
    // Logic xử lý cho clip
    return data.map((item, i) => (
      <div key={i}>
        <ImageViewer src={item.image_path} width="300px" height="160px" />
        <div className="d-flex justify-content-evenly">
          <div>
            <div>Frame: {item.frame_id}</div>
            <div>Folder: {item.video_folder}</div>
            <div>Video: {item.video_id}</div>
          </div>
          <div className="d-flex flex-column justify-content-around pb-2">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleShowVideo(
                  item.video_id,
                  item.frame_id,
                  item.fps,
                  item.image_path
                )
              }
            >
              Video
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleShowSimilarImage(item.image_path)}
            >
              Similar Image
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const handleImageLogic = () => {
    console.log(similarImage);
    if (
      similarImage &&
      similarImage.similar_images &&
      similarImage.similar_images.length > 0
    ) {
      return similarImage.similar_images.map((item, i) => (
        <div key={i}>
          <ImageViewer src={item.image_path} width="300px" height="160px" />
          <div className="d-flex justify-content-evenly">
            <div>
              <div>Frame: {item.frame_id}</div>
              <div>Folder: {item.video_folder}</div>
              <div>Video: {item.video_id}</div>
            </div>
            <div className="d-flex flex-column justify-content-around pb-2">
              <button
                className="btn btn-primary"
                onClick={() =>
                  handleShowVideo(
                    item.video_id,
                    item.frame_id,
                    item.fps,
                    item.image_path
                  )
                }
              >
                Video
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleShowSimilarImage(item.image_path)}
              >
                Similar Image
              </button>
            </div>
          </div>
        </div>
      ));
    }
    return <div>No similar images found.</div>;
  };

  const handleObjectLogic = (data) => {
    console.log(data);
    // Logic xử lý cho object
    return data.map((item, i) => (
      <div key={i}>
        <ImageViewer src={item.image_path} width="300px" height="160px" />
        <div className="d-flex justify-content-evenly">
          <div>
            <div>Frame: {item.frame_id}</div>
            <div>Folder: {item.video_folder}</div>
            <div>Video: {item.video_id}</div>
          </div>
          <div className="d-flex flex-column justify-content-around pb-2">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleShowVideo(
                  item.video_id,
                  item.frame_id,
                  item.fps,
                  item.image_path
                )
              }
            >
              Video
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleShowSimilarImage(item.image_path)}
            >
              Similar Image
            </button>
          </div>
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

  // Check if similarImage is not empty
  const hasSimilarImage =
    similarImage &&
    similarImage.similar_images &&
    similarImage.similar_images.length > 0;

  return (
    <>
      <div className="interface">Result</div>
      <div className="result">
        {hasSimilarImage ? (
          handleImageLogic()
        ) : (
          <>
            {asr?.length > 0 && handleAsrLogic(asr)}
            {clip?.length > 0 && handleClipLogic(clip)}
            {object?.length > 0 && handleObjectLogic(object)}
            {ocr?.length > 0 && handleOcrLogic(ocr)}
          </>
        )}
      </div>
      {/* Truyền videoCurrent và trạng thái show vào VideoPlayer */}
      <VideoPlayer
        show={show}
        setShow={setShow}
        videoID={videoCurrent}
        timeImageCurrent={timeImageCurrent}
      />
    </>
  );
}

export default Interface;
