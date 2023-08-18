import "./styling.css";
import satData from "./satData"
const Buttons = () => {
  const displaySats = ["Communication", "Positioning", "Probe", "Space Station", "Telescope", "Probe", "Space Debris","Communication", "Positioning", "Space Station"];
  
  const filterByType = ["Low", "Medium", "High"];
  
  const handleClick = () => {
};

    return (
      <div className="flex-container">
        {displaySats.map((sat, id) => (
      <div key={id}>
          <button onClick={() => filterByType(sat)} >{sat} Orbit
          <button onClick={handleClick}>Load Sat</button>
          <button id="filterButton" class="filter-btn">filterByType</button>
          <button>setSat</button>
          <button>displaySats</button>
          <button>All Orbits</button>
          </button>
      </div>
        ))}
         <satData displaySats={satData} />
         </div>
    );
   };
 
export default Buttons;