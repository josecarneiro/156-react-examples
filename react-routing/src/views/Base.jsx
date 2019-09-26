import React from "react";
import { Link } from "react-router-dom";

import projects from "./../projects";

export default () => (
  <div>
    <h1>Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis
      veniam maiores aliquid sit.
    </p>
    <p>
      {projects.map(project => (
        <Link to={`/project/${project.id}`} key={project.id}>
          {project.name}
        </Link>
      ))}
    </p>
  </div>
);
