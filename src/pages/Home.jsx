/* eslint-disable react/no-unescaped-entities */
import { FaGithub, FaLinkedin} from "react-icons/fa6";
import '../styles/home.css'
export default function Home() {
  return (
    <section id="home" className='home-wrapper'>
      <div className="home__description">
        <h1>Adriano Rosa </h1>
        <p>Estudante de Análise e Desenvolvimento de Sistemas </p>
        <div className="home__description--links">
          <a href="https://github.com/AdrianoR85" target="_blank"><FaGithub /></a>
          <a href="mhttps://www.linkedin.com/in/adriano-rosa-741979182/" target="_blank"><FaLinkedin /></a>
          <a href="./Adrino_Rosa_CV.pdf" download className="home__description--cv">Download_CV</a>
        </div>
        
      </div>
      <figure className="home__picture">
        <img src="http://github.com/AdrianoR85.png" alt="my photo" />
      </figure>
    </section>
  )
}