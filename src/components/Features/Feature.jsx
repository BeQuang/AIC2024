import { useState } from "react";

import "./Feature.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postSearchQuery } from "../../services/postService";

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

        <div className="form">
          <div className="wrap time-item">
            <Form.Label htmlFor="DAY">DAY</Form.Label>
            <Form.Control
              type="number"
              id="DAY"
              onChange={(e) =>
                setDataTime({ ...dataTime, day: e.target.value })
              }
            />
          </div>
          <div className="wrap time-item">
            <Form.Label htmlFor="MONTH">MONTH</Form.Label>
            <Form.Control
              type="number"
              id="MONTH"
              onChange={(e) =>
                setDataTime({ ...dataTime, month: e.target.value })
              }
            />
          </div>
          <div className="wrap time-item">
            <Form.Label htmlFor="YEAR">YEAR</Form.Label>
            <Form.Control
              type="number"
              id="YEAR"
              onChange={(e) =>
                setDataTime({ ...dataTime, year: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
