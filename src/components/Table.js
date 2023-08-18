import "./styling.css";
const getStatus = (operational) => {
  return operational ? "Active" : "Inactive";
};
const data = () => {

}
const Table = ({ sat }) => {
  const data = sat;
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        
        </thead>
        <tbody>

        <tr>
            <td>{data.name}</td>
            <td>{data.typeOfSatellite}</td>
            <td>{data.launchDate}</td>
            <td>{data.status}</td>
            <td>{getStatus(data.operational)}</td>
        </tr>
        </tbody>
      </table>
  );
};

export default Table;