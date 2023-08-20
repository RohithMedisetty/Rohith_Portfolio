import "./Workcardstyle.css";
import React from 'react'
import Workcard from "./Workcard"; 
import workcarddata from "./workcarddata";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {workcarddata.map((val,ind) => {
                return(
                    <Workcard 
                    key = {ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                    />
                );
            })}
            
        </div>
    </div>
  );
}

export default Work