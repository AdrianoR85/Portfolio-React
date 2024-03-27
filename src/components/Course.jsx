/* eslint-disable react/prop-types */
import '../styles/course.css'
export default function Course({name, college, startDate, endDate}) {
  return (
    <article className="course-wrapper">
      <p className='course__name'>{name}</p>
      <p className='course__local'><span>Local: </span>{college}</p>
      <p className="course__date">{startDate} - {endDate}</p>
    </article>
  )
}
