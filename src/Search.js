import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

//Date Picker Component
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //You use this if you use the react date range picker
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection"
  };

  function handleSelect(ranges){
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  };

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of Guests
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <button> Search arirbnb</button>
    </div>
  );
};

export default Search;
