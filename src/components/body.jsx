import "./style/style.css";
import cv from "./doc/cv.pdf";
import { github } from "./link";
import { linkedin } from "./link";
import projectDetails from "./projectDetails";
import skills from "./skill";

function Body() {
  return (
    <div className=" overflow-y-hidden overflow-x-hidden sticky w-full h-full flex flex-col sm:flex gap-x-8  mt-12 px-6">
      <section className="w-4/5 sticky sm:px-10 border">
        <div >
          <h1 className="text-5xl font-bold"> Hi I'm SHERIFFDEEN.</h1>
          <div className="flex gap-x-4 mb-6">
            <span className="underline text-gray-500">Software Engineer</span>
            <span className="underline text-gray-500">Tech. Educator</span>
            <span className="underline text-gray-500">
              Tech. Content Creator
            </span>
          </div>
          <p className="mb-8 text-gray-500 text-justify sm:text-xl">
            I am Highly motivated and experienced software engineer with a
            strong background in developing scalable, efficient, and reliable
            software systems. Proficient in range of programming languages,
            including Python, JavaScript, Typescript, C and HTML/CSS, with
            intermediate skill in both front-end and back-end development.
          </p>
          <p className="text-gray-500 text-justify sm:text-xl">
            In addition to my technical expertise, I devote time to create
            content on my learning journey by researching and crafting vidoes on
            frontend technologies. You can find my insights shared on platforms
            such as Hashnode, as well as my experiences on Medium.
          </p>
          <div className="flex gap-x-4 my-6 text-gray-700 font-semi-bold text-xl">
            <a
              href={github}
              className="hover:underline hover:cursor-pointer hover:transition hover:duration-1500 hover:ease-in-out"
            >
              Github
            </a>
            <a
              href={linkedin}
              className="hover:underline hover:cursor-pointer hover:transition hover:duration-1500 hover:ease-in-out"
            >
              LinkedIn
            </a>
            <a
              href={cv}
              target="_blank"
              className="hover:underline hover:cursor-pointer hover:transition hover:duration-1500 hover:ease-in-out"
            >
              Resume/CV
            </a>
          </div>
        </div>
      </section>
      <div className="flex flex-col border">
        <section id="Projects-section">
          <h1 className="text-2xl text-gray-700 font-bold">Featured Project</h1>

          <div className="flex flex-col gap-y-4">
            {projectDetails.map((project, index) => (
              <div className="w-4/5 m-auto rounded-xl p-8 shadow-md" key={index}>
                <div className="desc">
                  <h3>{project.title}</h3>

                  <p>{project.description} </p>

                  <a className="text-gray-700 undernline" href={project.demoUrl} target="_blank">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section >
          <h1 className="text-2xl text-gray-700 font-bold">Technical Skills</h1>

          <div className="w-4/5 m-auto rounded-xl p-8 shadow-md">
            {skills.map((skill, index) => (
              <div className="skill-content" key={index}>
                <h3>{skill.title}</h3>
                <ul>
                  {skill.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        
      </div>
    </div>
  );
}
export default Body;
