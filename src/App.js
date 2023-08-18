import Buttons from "./components/Buttons";
import Table from "./components/Table";
import useState from "./react";
import satData from "./satData";
function App() {
    const [sat, setSat] = useState(satData);
      const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
  );
}

export default App;
