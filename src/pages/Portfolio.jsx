import dataJSON from "../data/data.json"
import Card from "../components/Card"

import '../styles/portfolio.css'
export default function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project-wrapper">
        {dataJSON.projects.map((project, index) => (
          console.log(project.img),
          <Card
            key={index}
            name={project.name}
            src={project.img}
            link={project.link}
            alt={project.name}
            className={"card-project"}
            code={project.code}
          />
        ))}
      </div>
    </section>
  )
}