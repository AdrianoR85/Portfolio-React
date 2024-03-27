import Course from '../components/Course'
import '../styles/about.css'
export default function about() {
  return (
    <section id='about'>
      <h2>About</h2>
      <div className='about-content'>
        <div className='about__text'>
          <h3>Olá! Meu nome é <span className='about__text--name'>Adriano Rosa.</span> </h3>
          <p>Sou um estudante de Análise e Desenvolvimento de Sistemas, com formação técnica em Logística. Tenho mais de cinco anos de experiência como Auxiliar de Logística</p>
          <p>Em 2019, tive a oportunidade incrível de fazer um intercâmbio na Nova Zelândia. Essa experiência ampliou minha visão de mundo e reforçou minha paixão por aprender e descobrir novas coisas.</p>
          <p>No meu tempo livre, gosto de jogar videogame, um hobby que me ajuda a relaxar e aprimorar minhas habilidades de resolução de problemas.</p>
          <p>Estou sempre buscando novas oportunidades para aplicar meus conhecimentos e habilidades.</p>
        </div>
        <div className='about__education'>
          <h3>Educação</h3>
          <Course 
            name="Análise e Desenvolvimento de Sistema"
            college="FAM - Universidade das Américas" 
            startDate="2024"
            endDate="Andamento"
          />
          <Course 
            name="Técnico em Logística"
            college="Unisociesc" 
            startDate="2014"
            endDate="2015"
          />
        </div>
      </div>
    </section>
  )
}

