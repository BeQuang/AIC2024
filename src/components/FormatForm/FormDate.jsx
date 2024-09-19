/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";

function FormDate({ dataTime, setDataTime, classCustom }) {
  return (
    <>
      <div className={`form ${classCustom ? classCustom : ""}`}>
        <div className="wrap time-item">
          <Form.Label htmlFor="DAY">DAY</Form.Label>
          <Form.Control
            type="number"
            id="DAY"
            onChange={(e) => setDataTime({ ...dataTime, day: e.target.value })}
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
            onChange={(e) => setDataTime({ ...dataTime, year: e.target.value })}
          />
        </div>
      </div>
    </>
  );
}

export default FormDate;
