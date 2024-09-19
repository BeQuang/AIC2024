import { useState } from "react";

import "./Feature.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postSearchQuery } from "../../services/postService";
import FormDate from "../FormatForm/FormDate";

// eslint-disable-next-line react/prop-types
function Features({ setResponse, setIsSimilarImage }) {
  const [clip, setClip] = useState("");
  const [ocr, setOcr] = useState("");
  const [asr, setAsr] = useState("");
  const [dataTime, setDataTime] = useState({
    day: null,
    month: null,
    year: null,
  });

  const handleClip = async () => {
    let json = JSON.stringify({ clip: clip });

    const response = await postSearchQuery(
      json,
      dataTime.day,
      dataTime.month,
      dataTime.year
    );

    setResponse(response);
    setIsSimilarImage(false);
    console.log("Result >>>", response);
  };

  const handleKeyDownClip = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleClip();
    }
  };

  const handleOcr = async () => {
    let json = JSON.stringify({ ocr: ocr });

    const response = await postSearchQuery(
      json,
      dataTime.day,
      dataTime.month,
      dataTime.year
    );

    console.log("Result >>>", response);
    setResponse(response);
    setIsSimilarImage(false);
  };

  const handleKeyDownOcr = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleOcr();
    }
  };

  const handleAsr = async () => {
    let json = JSON.stringify({ asr: asr });

    const response = await postSearchQuery(
      json,
      dataTime.day,
      dataTime.month,
      dataTime.year
    );

    console.log("Result >>>", response);
    setResponse(response);
    setIsSimilarImage(false);
  };

  const handleKeyDownAsr = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handleAsr();
    }
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
              onKeyDown={handleKeyDownClip}
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
              onKeyDown={handleKeyDownOcr}
            />
          </div>
          <Button variant="primary" onClick={handleOcr} onKeyDown={handleOcr}>
            {" "}
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
              onKeyDown={handleKeyDownAsr}
            />
          </div>
          <Button variant="primary" onClick={handleAsr} onKeyDown={handleAsr}>
            {" "}
            Tìm
          </Button>
        </div>

        <FormDate dataTime={dataTime} setDataTime={setDataTime} />
      </div>
    </>
  );
}

export default Features;
