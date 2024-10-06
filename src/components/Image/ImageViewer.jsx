function ImageViewer({
  // eslint-disable-next-line react/prop-types
  src,
  // eslint-disable-next-line react/prop-types
  alt,
  // eslint-disable-next-line react/prop-types
  width = "auto",
  // eslint-disable-next-line react/prop-types
  height = "auto",
  // eslint-disable-next-line react/prop-types
  className = "",
}) {
  return (
    <div className={`image-viewer ${className}`}>
      <img src={src} alt={alt} style={{ width, height }} loading="lazy" />
    </div>
  );
}

export default ImageViewer;
