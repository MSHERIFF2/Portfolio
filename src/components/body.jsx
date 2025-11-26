import "./style/style.css";
import cv from "./doc/cv.pdf";
import { github } from "./link";
import { linkedin } from "./link";
import projectDetails from "./projectDetails";
import skills from "./skill";

function Body() {
  return (
   
    <div className="flex flex-col sm:flex-row w-full sm:h-screen gap-x-8  px-6 py-6 overflow-hidden  text-gray-800 ">
      
      
      <section className="sm:w-3/5 sm:px-10 sm:h-full">
        <div>
          <h1 className="sm:text-5xl text-3xl font-bold"> Hi I'm SHERIFFDEEN.</h1>
          <div className="flex gap-x-4 mb-6">
           
            <span className="underline text-gray-500 ">Software Engineer</span>
            <span className="underline text-gray-500 ">Tech. Educator</span>
            <span className="underline text-gray-500 ">
              Tech. Content Creator
            </span>
          </div>
       
          <p className="mb-8 text-gray-900 text-justify sm:text-l ">
            I am Highly motivated and experienced software engineer with a
            strong background in developing scalable, efficient, and reliable
            software systems. Proficient in range of programming languages,
            including Python, JavaScript, Typescript, C and HTML/CSS, with
            intermediate skill in both front-end and back-end development.
          </p>
        
          <p className="text-gray-900 text-justify sm:text-l ">
            In addition to my technical expertise, I devote time to create
            content on my learning journey by researching and crafting vidoes on
            frontend technologies. You can find my insights shared on platforms
            such as Hashnode, as well as my experiences on Medium.
          </p>
        
          <div className=" justify-center sm:justify-left flex gap-x-4 my-6 text-gray-700 font-semi-bold text-l ">
            <a
              href={github}
              target="_blank"
              className="hover:underline hover:cursor-pointer hover:transition hover:duration-1500 hover:ease-in-out"
            >
              Github
            </a>
            <a
              href={linkedin}
              target="_blank"
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

      
      <div className="flex flex-col sm:w-3/5 flex-grow sm:no-scrollbar sm:overflow-y-auto h-full pb-20 text-white">
        
       
        <section id="Projects-section">
         
          <h1 className="text-2xl text-gray-900 font-bold sm:mx-34">Featured Project</h1>

          <div className="flex flex-col gap-y-4">
            {projectDetails.map((project, index) => (
             
              <div 
                className="sm:w-3/5 sm:m-auto rounded-xl p-8 shadow-md bg-white dark:bg-gray-800 dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition duration-300 ease-in-out" 
                key={index}
              >
                <div className="desc">
                  <h3>{project.title}</h3>
                  <p>{project.description} </p>
                 
                  <a className="text-yellow-100 undernline " href={project.demoUrl} target="_blank">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

       
        <hr className="my-10 mx-32 border-gray-200 dark:border-gray-700" />
   
        <section>
       
          <h1 className="text-2xl text-gray-900 font-bold sm:mx-34">Technical Skills</h1>

   
          <div className="flex flex-col gap-y-8"  >
            {skills.map((skill, index) => (
              <div className="sm:w-3/5 sm:m-auto rounded-xl p-8  shadow-md bg-white dark:bg-gray-800 dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition duration-300 ease-in-out" key={index}>
                <h3 className="text-yellow-100 underline">{skill.title}</h3>
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