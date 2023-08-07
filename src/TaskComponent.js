export const TaskComponent = (props) => {
  return (
    <div>
      <h1 style={{ color: props.completed === true ? "green" : "black" }}>
        {props.taskName}
      </h1>
      <button onClick={() => props.updateTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};
