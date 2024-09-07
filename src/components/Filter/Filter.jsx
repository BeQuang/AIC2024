import { useState } from "react";

import "./Filter.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { postSearchFilterObj } from "../../services/postService";

function Filter() {
  const options = [
    "Object",
    "person",
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
  const [dataTime, setDataTime] = useState({
    day: null,
    month: null,
    year: null,
  });
  const [objectAsFilter, setObjectAsFilter] = useState(true);

  const handleObj = async () => {
    let json = JSON.stringify({ object: dataFilter.object });

    console.log(json, dataFilter.compare, dataFilter.number);

    const response = await postSearchFilterObj(
      json,
      dataFilter.compare,
      dataFilter.number,
      dataTime.day,
      dataTime.month,
      dataTime.year,
      objectAsFilter
    );

    console.log("Result >>>", response);
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
            <option value="gte">&lt;</option>
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
