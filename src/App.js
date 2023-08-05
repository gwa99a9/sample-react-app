import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProfileComponent
        name="obito"
        handle="@gwa99a9"
        email="jamesheller.jeewake@gmail.com"
      />
      <Job salary={80000} position="Software Engineer" company="Virtusa" />
      <UserProfileComponent
        name="Jeewaka"
        handle="@gwa99a9"
        email="jamesheller.jeewake@gmail.com"
      />
    </div>
  );
}

const UserProfileComponent = (props) => {
  return (
    <div className="UserProfileComponent">
      <h1>{props.name}</h1>
      <h1>{props.handle}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
