import { useState } from "react";

import "./Feature.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { postSearch } from "../../services/postService";
import axios from "axios";

function Features() {
  const [clip, setClip] = useState("");
  const [ocr, setOcr] = useState("");
  const [asr, setAsr] = useState("");
  const [dataJson, setDataJson] = useState({});

  const options = [
    "Object",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
  ];
  const [dataFilter, setDataFilter] = useState({
    object: "",
    compare: null,
    number: null,
  });

  const handleFindFilter = async () => {
    const json = JSON.stringify({
      clip: clip,
      ocr,
      asr,
      object: dataFilter.object,
    });
    setDataJson(json);

    console.log("JSON >>>>>", dataJson);

    // const response = await postSearch(dataJson);

    // console.log("Result >>>", response);

    axios
      .post("http://127.0.0.1:8000/app/search", dataJson)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
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
        </div>
      </div>

      <div className="filter">
        <h2>Filter</h2>
        <div className="wrap">
          <Form.Select
            onChange={(e) =>
              setDataFilter({ ...dataFilter, object: e.target.value })
            }
          >
            {options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
          <Form.Select
            onChange={(e) =>
              setDataFilter({ ...dataFilter, compare: e.target.value })
            }
          >
            <option>Compare</option>
            <option value="<">&lt;</option>
            <option value="=">=</option>
            <option value=">">&gt;</option>
          </Form.Select>
          <Form.Control
            type="number"
            onChange={(e) =>
              setDataFilter({ ...dataFilter, number: e.target.value })
            }
          />
        </div>
        <div className="btn-wrap">
          <Button variant="primary" onClick={handleFindFilter}>
            Tìm
          </Button>
        </div>
      </div>
    </>
  );
}

export default Features;
