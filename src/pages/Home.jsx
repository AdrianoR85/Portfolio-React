/* eslint-disable react/no-unescaped-entities */
import '../styles/home.css'
export default function Home() {
  return (
    <section id="home" className='home-wrapper'>
      <div className="home__description">
        <span className='home__span'>Hello, I'm</span>
        <h1>Adriano Rosa </h1>
        <p>I´m a<span> Systems Analysis and Development </span>student</p>
      </div>
      <figure className="home__picture">
        <img src="http://github.com/AdrianoR85.png" alt="my photo" />
      </figure>
    </section>
  )
}