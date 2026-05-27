import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Code, Database, TrendingUp } from 'lucide-react'
import { personalInfo, aboutInfo } from '../data/data'

const interestIcons = {
  'Desenvolvimento Web': Code,
  'Análise de Dados': Database,
  'Business Intelligence': TrendingUp,
  'Automação de Processos': Code
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--card)' }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Conheça um pouco mais sobre minha trajetória e objetivos
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>
          {/* Left Column - Bio & Education */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, marginBottom: '2rem' }}>
              {aboutInfo.description}
            </p>

            {/* Education */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                <GraduationCap size={24} style={{ color: 'var(--primary)' }} />
                Formação Acadêmica
              </h3>
              {aboutInfo.education.map((edu, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1rem',
                    backgroundColor: 'var(--secondary)',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--border)'
                  }}
                >
                  <h4 style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{edu.degree}</h4>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>{edu.institution}</p>
                  <p style={{ color: 'var(--primary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                    {edu.period} • {edu.status}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Interests & Stats */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Interests */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>
                Áreas de Interesse
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {aboutInfo.interests.map((interest, index) => {
                  const Icon = interestIcons[interest] || Code
                  return (
                    <motion.div
                      key={interest}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        backgroundColor: 'var(--secondary)',
                        borderRadius: '0.75rem',
                        border: '1px solid var(--border)',
                        transition: 'all 0.2s ease'
                      }}
                      whileHover={{ borderColor: 'var(--primary)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--primary)' }} />
                      <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{interest}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {aboutInfo.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem 1rem',
                    backgroundColor: 'var(--secondary)',
                    borderRadius: '0.75rem',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div
                    className="font-display"
                    style={{
                      fontSize: '2rem',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
