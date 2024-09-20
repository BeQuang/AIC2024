/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import VideoPlayer from "../VideoPlayer/VideoPlayer";
import ImageItem from "../Image/ImageItem";
import { postSimilarImage } from "../../services/postService";
import "./Interface.scss";

const linkLocal = "D:/Workspace/AIC2024/AIC2024/public/assets/images";

// eslint-disable-next-line react/prop-types
function Interface({ response, isSimilarImage, setIsSimilarImage }) {
  const { asr, clip, image, object, ocr } = response || {};
  const [videoCurrent, setVideoCurrent] = useState("");
  const [show, setShow] = useState(false);
  const [timeImageCurrent, setTimeImageCurrent] = useState(0);
  const [similarImage, setSimilarImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fpsCurrent, setFpsCurrent] = useState(0);
  const [textOcr, setTextOcr] = useState("");

  useEffect(() => {
    if (!isSimilarImage) {
      setSimilarImage(null);
    }
  }, [isSimilarImage]);

  const handleShowVideo = (video_id, frame_id, fps, stringOcr) => {
    setVideoCurrent(video_id);
    setShow(true);
    setTimeImageCurrent(frame_id / fps);
    setFpsCurrent(fps);
    setTextOcr(stringOcr);
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
        <ImageItem
          image_path={`../../../public/assets/images/${item.video_folder}/${item.video_id}/${item.video_id}_${item.frame_id}.jpg`}
          image_similar={
            linkLocal +
            `/${item.video_folder}/${item.video_id}/${item.video_id}_${item.frame_id}.jpg`
          }
          frame_id={item.frame_id}
          video_folder={item.video_folder}
          video_id={item.video_id}
          fps={item.fps}
          handleShowVideo={handleShowVideo}
          handleShowSimilarImage={handleShowSimilarImage}
        />
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
          <ImageItem
            image_path={`../../../public/assets/images/${item.video_folder}/${item.video_id}/${item.video_id}_${item.frame_id}.jpg`}
            image_similar={
              linkLocal +
              `/${item.video_folder}/${item.video_id}/${item.video_id}_${item.frame_id}.jpg`
            }
            frame_id={item.frame_id}
            video_folder={item.video_folder}
            video_id={item.video_id}
            fps={item.fps}
            handleShowVideo={handleShowVideo}
            handleShowSimilarImage={handleShowSimilarImage}
          />
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
        <ImageItem
          image_path={`../../../public/assets/images/${item.video_folder}/${item.video_id}/${item.video_id}_${item.frame_id}.jpg`}
          image_similar={
            linkLocal +
            `/${item.video_folder}/${item.video_id}/${item.video_id}_${item.frame_id}.jpg`
          }
          frame_id={item.frame_id}
          video_folder={item.video_folder}
          video_id={item.video_id}
          fps={item.fps}
          handleShowVideo={handleShowVideo}
          handleShowSimilarImage={handleShowSimilarImage}
        />
      </div>
    ));
  };

  const handleOcrLogic = (data) => {
    // Logic xử lý cho ocr
    return data.map((item, i) => (
      <div key={i}>
        <ImageItem
          image_path={item._source.image_path}
          image_similar={item._source.image_path}
          frame_id={item._source.frame}
          video_folder={item._source.video_name}
          video_id={item._source.video_name}
          fps={item._source.fps}
          textOcr={item._source.text}
          handleShowVideo={handleShowVideo}
          handleShowSimilarImage={handleShowSimilarImage}
        />
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
        fpsCurrent={fpsCurrent}
        textOcr={textOcr}
      />
    </>
  );
}

export default Interface;
