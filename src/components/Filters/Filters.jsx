import { useState } from "react";
import "./Filter.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Filters() {
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
    compare: "",
    number: "",
  });

  const handleFindFilter = () => {
    console.log(dataFilter);
  };

  return (
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
  );
}

export default Filters;
