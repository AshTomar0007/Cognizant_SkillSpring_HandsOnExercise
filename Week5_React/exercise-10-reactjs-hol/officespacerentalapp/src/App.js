import "./App.css";
import office from "./office.jpg";

function App() {
  const heading = "Office Space";

  const officeDetails = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 55000,
      Address: "Hyderabad"
    },
    {
      Name: "SmartWorks",
      Rent: 90000,
      Address: "Pune"
    }
  ];

  return (
    <div className="App">
      <h1>{heading}, at Affordable Range</h1>

      <img
        src={office}
        alt="Office Space"
        width="500"
        height="300"
      />

      <hr />

      <h2>Single Office Details</h2>

      <h3>Name: {officeDetails.Name}</h3>

      <h3
        style={{
          color: officeDetails.Rent <= 60000 ? "red" : "green"
        }}
      >
        Rent: ₹{officeDetails.Rent}
      </h3>

      <h3>Address: {officeDetails.Address}</h3>

      <hr />

      <h2>Office Space List</h2>

      {officeList.map((office, index) => (
        <div key={index}>
          <h3>Name: {office.Name}</h3>

          <h3
            style={{
              color: office.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent: ₹{office.Rent}
          </h3>

          <h3>Address: {office.Address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;