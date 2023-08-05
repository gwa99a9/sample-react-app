import "./App.css";
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
const isMaintenanceEnabled = false;

function App() {
  if (!isMaintenanceEnabled) {
    return (
      <div className="App">
        {users.map((user) => {
          console.log(user);
          return <ProfileComponent key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return "Maintenance Mode Enabled";
  }
}

export default App;
