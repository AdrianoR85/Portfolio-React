import { Header, Hero, About, Projects, Skills, Contact, Footer } from "@/components/portfolio"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
