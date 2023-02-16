// import React, { useState, useEffect } from "react";
// import StatisticList from "./StatisticsList";
// import StatisticListForFilters from "./StatisticsListForFilters";
// import statisticService from "../services/StatisticService";

// const StatisticsFilter = () => {

//   const [statistics, setStatistics] = useState([]);
//   const [filteredStatistics, setFilteredStatistics] = useState([]);
//   const [minValues, setMinValues] = useState({
//     assists: "",
//     blocks: "",
//     steals: "",
//     turnovers: ""
//   });
//   const [maxValues, setMaxValues] = useState({
//     assists: "",
//     blocks: "",
//     steals: "",
//     turnovers: ""
//   });
//   console.log("render")

//   useEffect(()=>{
      
//     // statisticService.getAll().then(data=>{
//     //   console.log(data);
//     //   setStatistics(data.data);
//     // })
//     statisticService.getAll().then(data=>{
//       console.log(data);
//       setStatistics(data.data);
//     })
//   }, [])

//   const handleFilter = () => {
//     const filteredStats = statistics.filter(stat => {
//       let include = true;
//       if (minValues.assists !== "" && stat.assists < minValues.assists) include = false;
//       if (maxValues.assists !== "" && stat.assists > maxValues.assists) include = false;
//       if (minValues.blocks !== "" && stat.blocks < minValues.blocks) include = false;
//       if (maxValues.blocks !== "" && stat.blocks > maxValues.blocks) include = false;
//       if (minValues.steals !== "" && stat.steals < minValues.steals) include = false;
//       if (maxValues.steals !== "" && stat.steals > maxValues.steals) include = false;
//       if (minValues.turnovers !== "" && stat.turnovers < minValues.turnovers) include = false;
//       if (maxValues.turnovers !== "" && stat.turnovers > maxValues.turnovers) include = false;
//       return include;
//     });
//     setFilteredStatistics(filteredStats);
//   };

//   const handleMinInputChange = (event) => {
//     const { name, value } = event.target;
//     setMinValues((prevState) => ({ ...prevState, [name]: value }));
//   };
  
//   const handleMaxInputChange = (event) => {
//     const { name, value } = event.target;
//     setMaxValues((prevState) => ({ ...prevState, [name]: value }));
//   };
  

//   const handleReset = () => {
//     setMinValues({
//       assists: "",
//       blocks: "",
//       steals: "",
//       turnovers: ""
//     });
//     setMaxValues({
//       assists: "",
//       blocks: "",
//       steals: "",
//       turnovers: ""
//     });
//     setFilteredStatistics(statistics);
//   };

//   return (
//     <div>
//       <form onSubmit={handleFilter}>
//         <div className="form-row">
//           <div className="form-group col-md-3">
//             <label htmlFor="assistsMin">Min assists:</label>
//             <input
//               type="number"
//               id="assistsMin"
//               name="assistsMin"
//               value={minValues.assists}
//               onChange={handleMinInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group col-md-3">
//             <label htmlFor="assistsMax">Max assists:</label>
//             <input
//               type="number"
//               id="assistsMax"
//               name="assistsMax"
//               value={maxValues.assists}
//               onChange={handleMaxInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group col-md-3">
//             <label htmlFor="turnoversMin">Min turnovers:</label>
//             <input
//               type="number"
//               id="turnoversMin"
//               name="turnoversMin"
//               value={minValues.turnovers}
//               onChange={handleMinInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group col-md-3">
//             <label htmlFor="turnoversMax">Max turnovers:</label>
//             <input
//               type="number"
//               id="turnoversMax"
//               name="turnoversMax"
//               value={maxValues.turnovers}
//               onChange={handleMaxInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group col-md-3">
//             <label htmlFor="stealsMin">Min steals:</label>
//             <input
//               type="number"
//               id="stealsMin"
//               name="stealsMin"
//               value={minValues.steals}
//               onChange={handleMinInputChange}
//               className="form-control"
//             />
//           </div>

//           <div className="form-group col-md-3">
//             <label htmlFor="stealsMax">Max steals:</label>
//             <input
//               type="number"
//               id="stealsMax"
//               name="stealsMax"
//               value={maxValues.steals}
//               onChange={handleMaxInputChange}
//               className="form-control"
//             />
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Filter
//         </button>
//       </form>
//       <StatisticListForFilters statisticsFiltered={filteredStatistics} />
//     </div>
//   );
// }


//   // return (
//   //   <div>
//   //     <div>
//   //       <label htmlFor="assistsMin">Minimum assists:</label>
//   //       <input type="number" id="assistsMin" value={minValues.assists} onChange={e => setMinValues({...minValues, assists: e.target.value})} />
//   //       <label htmlFor="assistsMax">Maximum assists:</label>
//   //       <input type="number" id="assistsMax" value={maxValues.assists} onChange={e => setMaxValues({...maxValues, assists: e.target.value})} />
//   //     </div>
//   //     <div>
//   //       <label htmlFor="blocksMin">Minimum blocks:</label>
//   //       <input type="number" id="blocksMin" value={minValues.blocks} onChange={e => setMinValues({...minValues, blocks: e.target.value})} />
//   //       <label htmlFor="blocksMax">Maximum blocks:</label>
//   //       <input type="number" id="blocksMax" value={maxValues.blocks} onChange={e => setMaxValues({...maxValues, blocks: e.target.value})} />
//   //     </div>
//   //     <div>
//   //       <label htmlFor="stealsMin">Minimum steals:</label>
//   //       <input type="number" id="stealsMin" value={minValues.steals} onChange={e => setMinValues({...minValues, steals: e.target.value})} />
//   //       <label htmlFor="stealsMax">Maximum steals:</label>
//   //       <input type="number" id="stealsMax" value={maxValues.steals} onChange={e => setMaxValues({...maxValues, steals: e.target.value})} />
//   //     </div>
//   //     <div className="form-group col-md-3">
//   //       <label htmlFor="turnoversMin">Min turnovers:</label>
//   //       <input
//   //         type="number"
//   //         id="turnoversMin"
//   //         name="turnoversMin"
//   //         value={minValues.turnovers}
//   //         onChange={handleMinInputChange}
//   //         className="form-control"
//   //       />
//   //     </div>
//   //     <div className="form-group col-md-3">
//   //       <label htmlFor="turnoversMax">Max turnovers:</label>
//   //       <input
//   //         type="number"
//   //         id="turnoversMax"
//   //         name="turnoversMax"
//   //         value={maxValues.turnovers}
//   //         onChange={handleMaxInputChange}
//   //         className="form-control"
//   //       />
//   //     </div>

//   //     <div className="form-group col-md-3">
//   //       <label htmlFor="stealsMin">Min steals:</label>
//   //       <input
//   //         type="number"
//   //         id="stealsMin"
//   //         name="stealsMin"
//   //         value={minValues.steals}
//   //         onChange={handleMinInputChange}
//   //         className="form-control"
//   //       />
//   //     </div>

//   //     <div className="form-group col-md-3">
//   //       <label htmlFor="stealsMax">Max steals:</label>
//   //       <input
//   //         type="number"
//   //         id="stealsMax"
//   //         name="stealsMax"
//   //         value={maxValues.steals}
//   //         onChange={handleMaxInputChange}
//   //         className="form-control"
//   //       />
//   //     </div>
//   //   </div>
//   // )}
  

          
// export default StatisticsFilter;




import React, { useEffect, useState } from "react";
import statisticService from "../services/StatisticService";
import StatisticListForFilters from "./StatisticsListForFilters";

export default function StatisticsFilter({  onFilter }) {
  const [data, setData] = useState([])
  const [allStatistics, setAllStatistics] = useState([])
  const [minValues, setMinValues] = useState({
    assists: "",
    blocks: "",
    steals: ""
  });

  const [maxValues, setMaxValues] = useState({
    assists: "",
    blocks: "",
    steals: ""
  });

  useEffect(()=>{
    statisticService.getAll().then(datas =>{
      setData(datas.data)
      console.log("EEE")
    })
  },[])

  useEffect(()=>{
    statisticService.getAll().then(datas =>{
      setAllStatistics(datas.data)
      console.log("EEE")
    })
  },[])

  function handleFilter() {
    console.log(maxValues)
    console.log(minValues)
    const filteredData = allStatistics.filter(
      item =>
        (minValues.assists === "" || item.assists >= minValues.assists) &&
        (maxValues.assists === "" || item.assists <= maxValues.assists) &&
        (minValues.blocks === "" || item.blocks >= minValues.blocks) &&
        (maxValues.blocks === "" || item.blocks <= maxValues.blocks) &&
        (minValues.steals === "" || item.steals >= minValues.steals) &&
        (maxValues.steals === "" || item.steals <= maxValues.steals)
    );
    setData(filteredData)
    console.log(data)
    console.log(filteredData)
    // onFilter(filteredData);
  }
  function report(){
    statisticService.report(data);
  }

  return (
    <div className="filter-container">
      <h2>Filter Data</h2>
      <div>
        <label>Minimum assists:</label>
        <input
          type="number"
          value={minValues.assists}
          onChange={e =>
            setMinValues({ ...minValues, assists: e.target.value })
          }
        />
      </div>
      <div>
        <label>Maximum assists:</label>
        <input
          type="number"
          value={maxValues.assists}
          onChange={e =>
            setMaxValues({ ...maxValues, assists: e.target.value })
          }
        />
      </div>
      <div>
        <label>Minimum blocks:</label>
        <input
          type="number"
          value={minValues.blocks}
          onChange={e =>
            setMinValues({ ...minValues, blocks: e.target.value })
          }
        />
      </div>
      <div>
        <label>Maximum blocks:</label>
        <input
          type="number"
          value={maxValues.blocks}
          onChange={e =>
            setMaxValues({ ...maxValues, blocks: e.target.value })
          }
        />
      </div>
      <div>
        <label>Minimum steals:</label>
        <input
          type="number"
          value={minValues.steals}
          onChange={e =>
            setMinValues({ ...minValues, steals: e.target.value })
          }
        />
      </div>
      <div>
        <label>Maximum steals:</label>
        <input
          type="number"
          value={maxValues.steals}
          onChange={e =>
            setMaxValues({ ...maxValues, steals: e.target.value })
          }
        />
      </div>
      <button onClick={handleFilter}>Filter</button>
      <StatisticListForFilters statisticsFiltered={data} />
      <button onClick={report}>Generate</button>
    </div>
  );
}
