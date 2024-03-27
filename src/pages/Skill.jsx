import dataJSON from "../data/data.json"
import Card from "../components/Card"

import '../styles/skill.css'
export default function Skill() {
  return (
    <section id="skill">
      <h2>Skills</h2>
      <div className="skill-wrapper">
        {dataJSON.skills.map((skill, index) => (
          <Card
            key={index}
            name={skill.name}
            src={skill.src}
            alt={skill.name}
            className={"card-skill"}
          />
        ))}
      </div>
    </section>
  )
}