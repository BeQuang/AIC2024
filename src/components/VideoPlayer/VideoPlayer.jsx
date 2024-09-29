/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import VideoFull from "../../components/VideoExport/VideoExport.jsx";

// Hàm để chuyển đổi giây thành định dạng giờ:phút:giây
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

function findVideoByTitle(title) {
  return VideoFull.find((video) => video.title === title);
}

function VideoPlayer({
  show,
  setShow,
  videoID,
  timeImageCurrent,
  fpsCurrent,
  textOcr,
  textAsr,
}) {
  const videoRef = useRef(null); // Tạo ref cho video
  const [currentTime, setCurrentTime] = useState(timeImageCurrent); // State lưu trữ thời gian hiện tại
  const [currentFrame, setCurrentFrame] = useState(0); // State lưu trữ frame hiện tại

  const handleClose = () => setShow(false);

  const VideoCurrent = findVideoByTitle(`Video ${videoID}`);

  // Cập nhật thời gian và frame khi video chạy
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const newTime = videoRef.current.currentTime;
      setCurrentTime(newTime);
      setCurrentFrame(Math.floor(newTime * fpsCurrent));
    }
  };

  // Sử dụng useEffect để thiết lập thời gian bắt đầu
  useEffect(() => {
    if (videoRef.current && show) {
      // Thêm điều kiện kiểm tra show
      videoRef.current.currentTime = timeImageCurrent;
    }
  }, [videoID, timeImageCurrent, show]); // Chạy lại khi videoID, timeImageCurrent hoặc show thay đổi

  // Hàm tua nhanh/chậm
  const handleSeek = (seconds) => {
    if (videoRef.current) {
      const newTime = videoRef.current.currentTime + seconds;
      videoRef.current.currentTime = newTime > 0 ? newTime : 0; // Đảm bảo không tua về trước 0 giây
    }
  };

  console.log(VideoCurrent);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Video: {videoID}
            {currentTime > 0 &&
              ` - ${formatTime(currentTime)} (Frame: ${currentFrame})`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {videoID ? (
            <>
              <video
                ref={videoRef}
                controls
                style={{ width: "90%", height: "80%" }}
                onTimeUpdate={handleTimeUpdate} // Lắng nghe sự kiện timeupdate
              >
                <source src={VideoCurrent.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Các nút điều khiển tua nhanh/chậm */}
              <div style={{ marginTop: "10px", textAlign: "center" }}>
                <Button
                  variant="primary"
                  onClick={() => handleSeek(-2)} // Tua lại 2 giây
                  style={{ marginRight: "10px" }}
                >
                  Tua lại 2s
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleSeek(2)} // Tua nhanh 2 giây
                >
                  Tua nhanh 2s
                </Button>
              </div>
            </>
          ) : (
            <p>No video available</p>
          )}
        </Modal.Body>
        <Modal.Body>
          {textOcr ? <div>Text: {textOcr}</div> : <div>Text: {textAsr}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VideoPlayer;
