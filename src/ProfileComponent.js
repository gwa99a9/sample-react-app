import "./ProfileComponent.css";
import { UserProfileComponent } from "./UserProfileComponent";
import { JobComponent } from "./JobComponent";
import { SkillComponent } from "./SkillComponent";
import { useEffect } from "react";

export const ProfileComponent = (props) => {
  useEffect(() => {
    console.log("MOUNTED");
    return () => {
      console.log("UNMOUNTED");
    };
  }, []);
  return (
    <div className="UserProfile">
      <UserProfileComponent
        name={props.user.name}
        handle={props.user.handle}
        email={props.user.email}
      />
      <JobComponent
        salary={props.user.salary}
        position={props.user.position}
        company={props.user.company}
      />
      {props.user.skills.map((skill) => {
        return <SkillComponent key={skill.id} skillName={skill.name} />;
      })}
    </div>
  );
};
