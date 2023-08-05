import "./UserProfileComponent.css";
export const UserProfileComponent = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.handle}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};
