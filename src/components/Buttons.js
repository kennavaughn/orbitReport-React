import "./styling.css";
import satData from "./satData"
const Buttons = () => {
const displaySats = ["Communication", "Positioning", "Probe", "Space Station", "Telescope", "Probe", "Space Debris","Communication", "Positioning", "Space Station",];
const handleClick = () => {
  console.log("Button clicked!");
}
displaySats.map((sat, id) => {
    return (
      <div className="flex-container">
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      <button onClick={handleClick}>Load Sat</button>
      <button id="filterButton" class="filter-btn">filterByType</button>
      <button>setSat</button>
      <button>displaySats</button>
      <button>All Orbits</button>
      </button>
      <satData displaySats={satData} />
      </div>
    );
  })}
 

export default Buttons;