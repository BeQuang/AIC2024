import { useState } from "react";

import "./Feature.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postSearchQuery } from "../../services/postService";

// eslint-disable-next-line react/prop-types
function Features({ setResponse }) {
  const [clip, setClip] = useState("");
  const [ocr, setOcr] = useState("");
  const [asr, setAsr] = useState("");

  const handleClip = async () => {
    let json = JSON.stringify({ clip: clip });

    const response = await postSearchQuery(json);

    console.log("Result >>>", response);
    setResponse(response);
  };

  const handleOcr = async () => {
    let json = JSON.stringify({ ocr: ocr });

    const response = await postSearchQuery(json);

    console.log("Result >>>", response);
    setResponse(response);
  };

  const handleAsr = async () => {
    let json = JSON.stringify({ asr: asr });

    const response = await postSearchQuery(json);

    console.log("Result >>>", response);
    setResponse(response);
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
          <Button variant="primary" onClick={handleClip}>
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
          <Button variant="primary" onClick={handleOcr}>
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
          <Button variant="primary" onClick={handleAsr}>
            Tìm
          </Button>
        </div>
      </div>
    </>
  );
}

export default Features;
