import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Hàm để chuyển đổi giây thành định dạng giờ:phút:giây
const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};

// eslint-disable-next-line react/prop-types
function VideoPlayer({ show, setShow, videoPath, timeImageCurrent }) {
  const handleClose = () => setShow(false);

  // Chuyển đổi thời gian hiện tại
  const formattedTime = formatTime(timeImageCurrent);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Video Player {timeImageCurrent > 0 && ` - ${formattedTime}`}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {videoPath ? (
            <iframe
              src={videoPath}
              width="100%"
              height="400px"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Player"
            />
          ) : (
            <p>No video available</p>
          )}
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
