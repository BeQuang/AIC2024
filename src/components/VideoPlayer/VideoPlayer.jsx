import { useRef, useState, useEffect } from "react";
import "./VideoPlayer.scss";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

// eslint-disable-next-line react/prop-types
const VideoPlayer = ({ src, type }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hoverTime, setHoverTime] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const updateTime = () => {
      setCurrentTime(video.currentTime);
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", () => {
      setDuration(video.duration);
    });

    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  const handleRewind = () => {
    videoRef.current.currentTime -= 5;
  };

  const handleFastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const handleTimeChange = (event) => {
    videoRef.current.currentTime = event.target.value;
    setCurrentTime(event.target.value);
  };

  const handleMouseMove = (event) => {
    const seekBar = event.target;
    const rect = seekBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const time = (x / seekBar.offsetWidth) * duration;
    setHoverTime(time);
    setTooltipPosition(x);
  };

  return (
    <div className="video-container">
      <video ref={videoRef} className="source">
        <source src={src} type={type} />
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
      <div className="controls">
        <button onClick={handleRewind}>Rewind 5s</button>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleFastForward}>Forward 5s</button>
        <div className="seek-bar">
          <div className="tooltip" style={{ left: `${tooltipPosition}px` }}>
            {hoverTime && formatTime(hoverTime)}
          </div>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleTimeChange}
            onMouseMove={handleMouseMove}
          />
        </div>
        <div className="time-display">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
