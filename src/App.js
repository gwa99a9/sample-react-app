import styles from "./App.module.css";

function App() {
  const age = 159;
  if (age >= 18) {
    return (
      <div className={styles.App}>
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
         <Job salary={120000} position="Engineer" company="Virtusa" />
      </div>
    );
  } else {
    return "Under age";
  }
}

const UserProfileComponent = (props) => {
  return (
    <div className={styles.UserProfileComponent}>
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
      <h2 style={{color: props.salary>=100000 ? "green" : "red"}}>{props.salary>=100000 ? "Good Salary" : "Bad Salary"}</h2>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
