import React from 'react';
import '../styles/resume.css';

const Resume = () => {
    return (
        <div className="resume-container">
            <header className="resume-header">
                <div className="personal-info">
                    <h1 className="resume-title name">Srinivasan P</h1>
                    <p className="linkedin"><a href="https://www.linkedin.com/in/srinivasanpalanivel/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    <p className="portfolio"><a href="https://psrini.wixsite.com/portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a></p>
                </div>
                <div className="contact-info">
                    <p>Email: srinivasanpalanivel4@gmail.com</p>
                    <p>Mobile: 9360161838</p>
                </div>
            </header>
            <section>
                <h2 className="summary">Summary</h2>
                <p className="summary-test">Highly motivated Full Stack Engineer with a strong background in business strategy and a passion for building user-centric web applications. Proficient in both front-end and back-end technologies such as Java, ReactJS, and Spring Boot. Adept at collaborating within agile teams to deliver scalable, high-performance solutions. Strong business acumen to understand user needs and build impactful web applications.</p>
                <h2 className="skills">Skills & Tools</h2>
                <ul className="skills-list">
                    <li><strong>Languages:</strong> Java, Rest API, ReactJS, HTML5, CSS3, JavaScript</li>
                    <li><strong>Source control:</strong> GIT, Github</li>
                    <li><strong>Agile Methodologies:</strong> Scrum</li>
                    <li><strong>Platforms:</strong> Windows, MacOS, Linux, Web, GCP Cloud, Sonarqube, Fossa, CheckMark, 42Crunch.</li>
                    <li><strong>Frameworks:</strong> Spring Boot, React, Redux</li>
                    <li><strong>Tools:</strong> Tekton - Cloud Native CI/CD, Quantum Metric, Datadog Tool, Postman, Visual Studio, IntelliJ, WebStorm</li>
                </ul>
            </section>
            <section>
                <h2 className="experience">Professional Experience</h2>
                <div className="experience-item">
                    <div className="experience-header">
                        <h3 className="ford-pro-data-tech">Ford Pro Data & Tech</h3>
                        <p className="date">June 2023 - Present</p>
                    </div>
                    <div className="experience-subheader">
                        <h4 className="software-developer">Software Developer</h4>
                        <p className="chennai">Chennai, India.</p>
                    </div>
                    <ul className="experience-list">
                        <li>Developed and maintained critical software solutions for Ford Pro Data & Tech using Java, Spring Boot, REST APIs, React, GCP, and Tekton.</li>
                        <li>Improved team velocity by 37% by fostering a collaborative and efficient development environment.</li>
                        <li>Developed and integrated UI components with backend services, contributing to over 80% of front-end and back-end testing.</li>
                        <li>Ensured high code quality through rigorous testing and adherence to SonarQube, Fozza checkmarks, and 42 Crunch standards.</li>
                        <li>Automated the generation and delivery of key performance metrics reports using Java REST API and GCP Cloud Scheduler, significantly reducing manual effort.</li>
                    </ul>
                </div>
                <div className="experience-item">
                    <div className="experience-header">
                        <h3 className="ford-pro-data-tech">Ford Pro Data & Tech</h3>
                        <p className="date">Jan 2023 - Jun 2023</p>
                    </div>
                    <div className="experience-subheader">
                        <h4 className="software-developer">Software Developer - Intern</h4>
                        <p className="chennai">Chennai, India.</p>
                    </div>
                    <ul className="experience-list">
                        <li>Developed proficiency in Java, Spring Boot, and React, contributing to the Upfit Service project. This multi-page website manages numerous users, resulting in increased revenue for Ford Pro.</li>
                        <li>Enhanced understanding of Agile, Scrum, and Kanban methodologies: Applied these project management frameworks to improve team efficiency and deliver the Uplift Service project successfully.</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 className="project">Projects</h2>
                <ul className="project-list">
                    <li><strong>Full-Stack Development:</strong> Designed and developed a complete interview management application.</li>
                    <li><strong>Technology Stack:</strong> Utilised ReactJS (front-end), Spring Boot (back-end), and PostgreSQL (database).</li>
                    <li><strong>Key Features:</strong>
                        <ul>
                            <li>User-friendly interface for candidate and panelist profiles.</li>
                            <li>Automated scheduling functionality.</li>
                            <li>Streamlined feedback collection process.</li>
                            <li>Performance Optimisation: Achieved a 15% reduction in page load times.</li>
                        </ul>
                    </li>
                    <li><strong>Full Lifecycle Management:</strong> Managed the entire software development lifecycle, from initial concept to final deployment.</li>
                </ul>
            </section>
            <section>
                <ul className="education-details">
                    <h2 className="education">Education</h2>
                    <li>
                        <div className="Bachelor-of-Engineering">
                            <h3>Bachelor of Engineering</h3>
                            <p className="Bachelor-of-Engineering-date">Aug 2019 - Apr 2023</p>
                        </div>
                        <div className="major">
                            <p className="Major">Major: Information Science And Engineering</p>
                            <p className="cgpa">CGPA: 8.57</p>
                        </div>
                        <div className="collage-name">
                            <p>Bannari Amman Institute of Technology</p>
                            <p className="location">Erode, Tamil Nadu.</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <div className="extracurricular-activities">
                    <h2>Extracurricular Activities</h2>
                    <p>President - Photohub</p>
                    <p>Volunteer - Green Eco Organisation</p>
                </div>
            </section>
        </div>
    );
};

export default Resume;
