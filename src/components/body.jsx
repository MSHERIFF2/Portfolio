import "./style/style.css";
import cv from "./doc/cv.pdf";
import { github } from "./link";
import { linkedin } from "./link";
import projectDetails from "./projectDetails";
import skills from "./skill";

function Body() {
  return (
    // 1. **THEMING & LAYOUT:**
    // - `dark:bg-gray-900` & `dark:text-gray-200` for Dark Mode theme on the entire component.
    // - `h-screen` & `overflow-hidden` fixes the height and prevents the main page scroll.
    <div className="flex w-full h-screen gap-x-8 mt-12 px-6 overflow-hidden bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      
      {/* 2. **HERO SECTION (STATIC LEFT COLUMN):** */}
      {/* - `w-2/5` fixes the width of the Hero section.
         - `h-full` ensures it takes up the full container height. */}
      <section className="w-2/5 sm:px-10 h-full">
        <div>
          <h1 className="text-5xl font-bold"> Hi I'm SHERIFFDEEN.</h1>
          <div className="flex gap-x-4 mb-6">
            {/* Adjusted color for better visibility in Dark Mode */}
            <span className="underline text-gray-500 dark:text-gray-400">Software Engineer</span>
            <span className="underline text-gray-500 dark:text-gray-400">Tech. Educator</span>
            <span className="underline text-gray-500 dark:text-gray-400">
              Tech. Content Creator
            </span>
          </div>
          {/* Adjusted color for better visibility in Dark Mode */}
          <p className="mb-8 text-gray-500 text-justify sm:text-xl dark:text-gray-400">
            I am Highly motivated and experienced software engineer with a
            strong background in developing scalable, efficient, and reliable
            software systems. Proficient in range of programming languages,
            including Python, JavaScript, Typescript, C and HTML/CSS, with
            intermediate skill in both front-end and back-end development.
          </p>
          {/* Adjusted color for better visibility in Dark Mode */}
          <p className="text-gray-500 text-justify sm:text-xl dark:text-gray-400">
            In addition to my technical expertise, I devote time to create
            content on my learning journey by researching and crafting vidoes on
            frontend technologies. You can find my insights shared on platforms
            such as Hashnode, as well as my experiences on Medium.
          </p>
          {/* Adjusted color for better visibility in Dark Mode */}
          <div className="flex gap-x-4 my-6 text-gray-700 font-semi-bold text-xl dark:text-gray-300">
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

      {/* 3. **PROJECTS/SKILLS SECTION (SCROLLABLE RIGHT COLUMN):** */}
      {/* - `w-3/5` ensures it takes up the rest of the space.
         - `overflow-y-auto` enables vertical scrolling for this section only.
         - `pb-20` adds padding at the bottom so the last content is visible. */}
      <div className="flex flex-col w-3/5 flex-grow overflow-y-auto h-full pb-20">
        
        {/* Projects Section */}
        <section id="Projects-section">
          {/* Adjusted color for better visibility in Dark Mode */}
          <h1 className="text-2xl text-gray-700 font-bold dark:text-gray-200">Featured Project</h1>

          <div className="flex flex-col gap-y-4">
            {projectDetails.map((project, index) => (
              // **THEMING:** Added background and shadow styling for the card
              <div 
                className="rounded-xl p-8 shadow-md bg-white dark:bg-gray-800 dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition duration-300 ease-in-out" 
                key={index}
              >
                <div className="desc">
                  <h3>{project.title}</h3>
                  <p>{project.description} </p>
                  {/* Adjusted color for better visibility in Dark Mode */}
                  <a className="text-gray-700 undernline dark:text-teal-400" href={project.demoUrl} target="_blank">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Added a separator for visual clarity */}
        <hr className="my-10 border-gray-200 dark:border-gray-700" />
        
        {/* Skills Section */}
        <section>
          {/* Adjusted color for better visibility in Dark Mode */}
          <h1 className="text-2xl text-gray-700 font-bold dark:text-gray-200">Technical Skills</h1>

          {/* **THEMING:** Added background and shadow styling for the card */}
          <div className="rounded-xl p-8 shadow-md bg-white dark:bg-gray-800 dark:shadow-lg">
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