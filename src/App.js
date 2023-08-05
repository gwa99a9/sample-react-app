import "./App.css";
import { useState } from "react";
import { ProfileComponent } from "./ProfileComponent";

const users = [
  {
    id: 1,
    name: "obito",
    handle: "@gwa99a9",
    email: "obito@gsd.com",
    salary: "30000",
    position: "Intern Engineer",
    company: "Virtusa",
    skills: [
      { id: 1, name: "Java" },
      { id: 2, name: "C++" },
      { id: 3, name: "Spring Boot" },
      { id: 4, name: "Python" },
    ],
  },
  {
    id: 2,
    name: "Jeewaka",
    handle: "@jeewaka",
    email: "jamesheller.jeewake@gmail.com",
    salary: "100000",
    position: "Software Engineer",
    company: "Virtusa",
    skills: [
      { id: 1, name: "JS" },
      { id: 2, name: "Angular" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Nodejs" },
    ],
  },
];

function App() {
  const [bugCount, setBugCount] = useState(0);
  const [maintenanceMode, setMaintenanceEnabled] = useState(false);

  const increaseBugCount = () => {
    setBugCount(bugCount + 1);
    if (bugCount >= 12) setMaintenanceEnabled(true);
  };

  const decreaseBugCount = () => {
    if (bugCount > 0) setBugCount(bugCount - 1);
    if (bugCount <= 12) setMaintenanceEnabled(false);
  };

  return (
    <div className="App">
      <h1>Bug Count: {bugCount}</h1>
      <button onClick={increaseBugCount}>increaseBugCount</button>
      <button onClick={decreaseBugCount}>decreaseBugCount</button>
      <br></br>
      <br></br>
      <h1>Maintenance Mode : {!maintenanceMode ? "Enabled" : "Disabled"}</h1>
      <button
        onClick={() => {
          bugCount <= 12
            ? setMaintenanceEnabled(!maintenanceMode)
            : alert("ERROR : Too Many Bugs");
        }}
      >
        Enable/Disable Maintenance Mode
      </button>
      <hr></hr>
      {!maintenanceMode &&
        users.map((user) => {
          return <ProfileComponent key={user.id} user={user} />;
        })}
    </div>
  );
}

export default App;
