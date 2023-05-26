import Image from "next/image";
import React from "react";
import Project from "../src/img/project.png";
import imgProject from "../src/img/people.png";
import About from "./About";
import { useSelector } from "react-redux";

function ProjectCard() {
  const project = useSelector((state) => state.project);
  const dataproject = project?.project?.map((project) => {
    return project
  });

  const  icon = dataproject.map((projetuser) => {return projetuser});

  // console.log('icon : ', icon);


  return (
    <>
      <div className="project__conatiner">
        <div className="top_img_title">
          <Image src={Project} className="present__project" alt="Project" />
          <h2>funded projects</h2>
        </div>
        <div className="container__card-project">
          {project?.project?.map((proj) => {
            return (
              <div
                className="card__project"
                data-aos="zoom-in"
                data-aos-duration="800"
                key={proj.id}
              >
                <div className="img__card">
                  <Image
                    src={imgProject}
                    alt="Image Project"
                    className="image__project"
                  />
                </div>
                <div className="contains__card">
                  <div className="user__info">
                    <Image
                      src={imgProject}
                      className="image__user"
                      alt="Image Project"
                    />
                    <div>{proj.user.name } {proj.user.firstname } </div>
                  </div>
                  <p>{proj.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <About />
    </>
  );
}

export default ProjectCard;
