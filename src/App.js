import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData/";
function App() {
    const [sat, setSat] = useState(satData);
      const displaySats = [...new Set(satData.map((data) => data.orbitType))];
      const satData = [
        {
          id: 1,
          name: "Sirius 1",
          type: "Communication",
          launchDate: "2007-11-17",
          orbitType: "Low",
          operational: false
        },
        {
          id: 2,
          name: "USA-206 IIRM",
          type: "Positioning",
          launchDate: "2009-08-17",
          orbitType: "Medium",
          operational: true
        },
        {
          id: 3,
          name: "Vanguard 1",
          type: "Probe",
          launchDate: "1958-03-17",
          orbitType: "High",
          operational: false
        },
        {
          id: 4,
          name: "SNAP 10-A",
          type: "Space Station",
          launchDate: "1965-11-01",
          orbitType: "High",
          operational: false
        },
        {
          id: 5,
          name: "Hubble Space Telescope",
          type: "Telescope",
          launchDate: "1990-05-24",
          orbitType: "Low",
          operational: true
        },
        {
          id: 6,
          name: "Envisat",
          type: "Probe",
          launchDate: "2002-03-01",
          orbitType: "Low",
          operational: false
        },
        {
          id: 7,
          name: "Thermal Blanket",
          type: "Space Debris",
          launchDate: "N/A",
          orbitType: "Low",
          operational: false
        },
        {
          id: 8,
          name: "Morelos III",
          type: "Communication",
          launchDate: "2012-12-19",
          orbitType: "Low",
          operational: true
        },
        {
          id: 9,
          name: "IIR-M",
          type: "Positioning",
          launchDate: "2007-08-17",
          orbitType: "Low",
          operational: true
        },
        {
          id: 10,
          name: "ISS",
          type: "Space Station",
          launchDate: "1998-11-20",
          orbitType: "Low",
          operational: true
        }
      ];
      

  return (
    <div>
   <Banner />
   <Buttons
     filterByType={filterByType}
     setSat={setSat}
     displaySats={displaySats}
   />
   <Table sat={sat} />
    </div>
  );
}

export default App;
