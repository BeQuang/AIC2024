import { useState } from "react";

import "./Feature.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Features() {
  const [clip, setClip] = useState("");
  const [ocr, setOcr] = useState("");
  const [asr, setAsr] = useState("");

  const handleFindClip = () => {
    console.log(clip);
  };

  const handleFindOcr = () => {
    console.log(ocr);
  };

  const handleFindAsr = () => {
    console.log(asr);
  };

  return (
    <>
      <div className="feature-title">Feature</div>
      <div className="feature-input">
        <h2>Querry</h2>
        <div className="form">
          <div className="wrap">
            <Form.Label htmlFor="CLIP">CLIP</Form.Label>
            <Form.Control
              type="text"
              id="CLIP"
              onChange={(e) => setClip(e.target.value)}
            />
          </div>
          <Button variant="primary" onClick={handleFindClip}>
            Tìm
          </Button>
        </div>
        <div className="form">
          <div className="wrap">
            <Form.Label htmlFor="OCR">OCR</Form.Label>
            <Form.Control
              type="text"
              id="OCR"
              onChange={(e) => setOcr(e.target.value)}
            />
          </div>
          <Button variant="primary" onClick={handleFindOcr}>
            Tìm
          </Button>
        </div>
        <div className="form">
          <div className="wrap">
            <Form.Label htmlFor="ASR">ASR</Form.Label>
            <Form.Control
              type="text"
              id="ASR"
              onChange={(e) => setAsr(e.target.value)}
            />
          </div>
          <Button variant="primary" onClick={handleFindAsr}>
            Tìm
          </Button>
        </div>
      </div>
    </>
  );
}

export default Features;
