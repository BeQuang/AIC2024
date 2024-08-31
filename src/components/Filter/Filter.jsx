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

  const handleObj = async () => {
    let json = JSON.stringify({ object: dataFilter.object });

    console.log(json, dataFilter.compare, dataFilter.number);

    const response = await postSearchFilterObj(
      json,
      dataFilter.compare,
      dataFilter.number
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
