import './style/style.css';
import myPhoto from './images/myPhoto.png';
import cv from './doc/cv.pdf';
import projectDetails from './projectDetails';
import skills from './skill';

function Body() {
    return (
        <>
            <div>

                <section id="hero-section">
                    <div className="hero-image">
                        <img src={myPhoto} alt="user picture" loading="lazy" />
                    </div>
                    <div className="hero-content">
                        <p className="hi">Hi I'm</p>
                        <h1 className="name">SHERIFFDEEN</h1>
                        <p className="bio"> Software Engineer.
                            Highly motivated and experienced software
                            engineer with a strong background in developing
                            scalable, efficient, and reliable software systems.
                            Proficient in range of programming languages,
                            including Python, JavaScript, Typescript, C and
                            HTML/CSS, with intermediate skill in both front-end
                            and back-end development.
                        </p>
                        <a href={cv} className="cv" target="_blank"> View my cv </a>
                    </div>


                </section>

                <section id="skills-section">
                    <h1 className="skill">Technical Skills</h1>

                    <div className="skill-list">
                        {skills.map((skill, index) => (
                            <div className="skill-content" key={index}>
                                <h3>{skill.title}</h3>
                                 <ul >
                                {skill.items.map((item, idx) => (
                                   
                                        <li key={idx}>{item}</li>
                                  
                                ))}
                                  </ul>

                            </div>
                        ))}


                    </div>
                </section>
                <section id="Projects-section">
                    <h1 className="project">Projects</h1>

                    <div className="project-list">
                        {projectDetails.map((project, index) => (

                            <div className="project-detail" key={index}>
                                <img src={project.imageUrl} alt={project.title} loading="lazy" />
                                <div className='desc'>
                                    <h3>{project.title}</h3>

                                    <p>{project.description} </p>


                                    <a className='cv' href={project.demoUrl} target="_blank">View Demo</a>
                                </div>


                            </div>

                        )

                        )
                        }

                    </div>

                </section>


            </div>

        </>
    )
}
export default Body;