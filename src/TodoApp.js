import { useState } from "react";
import "./App.css";
import { TaskComponent } from "./TaskComponent";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleOnChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    //spread operator ...
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((elm) => elm.id !== id));
  };

  const updateTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <input type="text" onChange={handleOnChange}></input>
      <button onClick={addTask}>Add Task</button>
      <div>
        {todoList.map((task) => {
          return (
            <TaskComponent
              key={task.id}
              id={task.id}
              taskName={task.taskName}
              completed={task.completed}
              updateTask={updateTask}
              deleteTask={deleteTask}
            ></TaskComponent>
          );
        })}
      </div>
    </div>
  );
}

export default TodoApp;
