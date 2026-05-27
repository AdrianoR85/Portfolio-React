"use client"

import { motion } from "framer-motion"
import { GraduationCap, MapPin, Gamepad2, Code, Database, Cpu } from "lucide-react"
import { portfolioData } from "@/lib/data"

const iconMap: Record<string, React.ReactNode> = {
  "Desenvolvimento Web": <Code className="w-5 h-5" />,
  "Análise de Dados": <Database className="w-5 h-5" />,
  "Automação": <Cpu className="w-5 h-5" />,
  "Videogames": <Gamepad2 className="w-5 h-5" />
}

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-primary">
              {portfolioData.about.intro}
            </h3>
            {portfolioData.about.description.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Interests */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-4">Áreas de Interesse</h4>
              <div className="flex flex-wrap gap-3">
                {portfolioData.about.interests.map((interest) => (
                  <motion.span
                    key={interest}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg text-sm"
                  >
                    {iconMap[interest]}
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Formação Acadêmica
            </h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="relative pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary/30 border-2 border-primary" />
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-muted-foreground flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" />
                    {edu.institution}
                  </p>
                  <p className="text-sm text-primary mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-secondary rounded-xl text-center"
              >
                <span className="text-3xl font-bold text-primary">5+</span>
                <p className="text-sm text-muted-foreground mt-1">Anos de Experiência</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-secondary rounded-xl text-center"
              >
                <span className="text-3xl font-bold text-primary">10+</span>
                <p className="text-sm text-muted-foreground mt-1">Projetos Realizados</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
