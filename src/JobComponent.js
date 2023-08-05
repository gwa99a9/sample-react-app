export const JobComponent = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h2 style={{ color: props.salary >= 100000 ? "green" : "red" }}>
        {props.salary >= 100000 ? "Good Salary" : "Bad Salary"}
      </h2>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};
