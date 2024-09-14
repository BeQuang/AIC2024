import { useState } from "react";

import "./Filter.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postSearchFilterObj } from "../../services/postService";

// eslint-disable-next-line react/prop-types
function Filter({ setResponse, setIsSimilarImage }) {
  const options = [
    "Object",
    "person",
    "bottle",
    "chair",
    "laptop",
    "tie",
    "tv",
    "wine glass",
  ];

  const [dataFilter, setDataFilter] = useState({
    object: "",
    compare: null,
    number: null,
  });
  const [dataTime, setDataTime] = useState({
    day: null,
    month: null,
    year: null,
  });
  const [objectAsFilter, setObjectAsFilter] = useState(true);

  const handleObj = async () => {
    let json = JSON.stringify({ object: dataFilter.object });

    const response = await postSearchFilterObj(
      json,
      dataTime.day,
      dataTime.month,
      dataTime.year,
      // 10,
      dataFilter.compare,
      dataFilter.number,
      objectAsFilter
    );

    console.log("Result >>>", response);
    setResponse(response);
    setIsSimilarImage(false);
  };

  return (
    <>
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
            <option value="gte">&gt;=</option>
            <option value="lte">&lt;=</option>
            <option value="eq">===</option>
            <option value="ne">!==</option>
            <option value=">">&gt;</option>
            <option value="<">&lt;</option>
          </Form.Select>
          <Form.Control
            type="number"
            onChange={(e) =>
              setDataFilter({ ...dataFilter, number: e.target.value })
            }
          />
        </div>

        <div className="form data-time">
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

        <div className="obj-filter">
          <div className="wrap time-item">
            <Form.Label htmlFor="YEAR">OBJECT AS FILTER</Form.Label>
            <Form.Select onChange={(e) => setObjectAsFilter(e.target.value)}>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Select>
          </div>
        </div>

        <div className="btn-wrap">
          <Button variant="primary" onClick={handleObj}>
            Tìm
          </Button>
        </div>
      </div>
    </>
  );
}

export default Filter;
