import React, { useState } from "react";

const StatisticFilter = (props) => {

  
  const [minValues, setMinValues] = useState({
    points: "",
    assists: "",
    rebounds: "",
    steals: "",
    blocks: "",
  });

  const [maxValues, setMaxValues] = useState({
    points: "",
    assists: "",
    rebounds: "",
    steals: "",
    blocks: "",
  });

  const handleMinChange = (field) => (event) => {
    setMinValues({ ...minValues, [field]: event.target.value });
  };

  const handleMaxChange = (field) => (event) => {
    setMaxValues({ ...maxValues, [field]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filteredStatistics = props.statistics.filter((statistic) => {
      let isValid = true;

      for (const field in minValues) {
        if (minValues[field] !== "" && statistic[field] < minValues[field]) {
          isValid = false;
          break;
        }
      }

      for (const field in maxValues) {
        if (maxValues[field] !== "" && statistic[field] > maxValues[field]) {
          isValid = false;
          break;
        }
      }

      return isValid;
    });

    props.setFilteredStatistics(filteredStatistics);
    console.log(filteredStatistics)
    console.log(props.statistics)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Points:</label>
        <input
          type="text"
          value={minValues.points}
          onChange={handleMinChange("points")}
        />
        <input
          type="text"
          value={maxValues.points}
          onChange={handleMaxChange("points")}
        />
      </div>
      <div>
        <label>Assists:</label>
        <input
          type="text"
          value={minValues.assists}
          onChange={handleMinChange("assists")}
        />
        <input
          type="text"
          value={maxValues.assists}
          onChange={handleMaxChange("assists")}
        />
      </div>
      <div>
        <label>Rebounds:</label>
        <input
          type="text"
          value={minValues.rebounds}
          onChange={handleMinChange("rebounds")}
        />
        <input
          type="text"
          value={maxValues.rebounds}
          onChange={handleMaxChange("rebounds")}
        />
      </div>
      <div>
        <label>Steals:</label>
        <input
          type="text"
          value={minValues.steals}
          onChange={handleMinChange("steals")}
        />
        <input
          type="text"
          value={maxValues.steals}
          onChange={handleMaxChange("steals")}
        />
      </div>
      <button onClick={handleSubmit}>filter</button>
    </form>
  )}

  export default StatisticFilter;